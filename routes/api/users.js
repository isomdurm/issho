const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require('../../config/keys');

const Nexmo = require('nexmo');

const validateRegisterInput = require("../../validations/register");
const validateSignInInput = require("../../validations/signin");

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      id: req.user.id,
      email: req.user.email,
      requestId: req.user.requestId
    });
  }
);

const nexmo = new Nexmo({
  apiKey: keys.nexmoApiKey,
  apiSecret: keys.nexmoApiSecret
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      // Throw a 400 error if the email address already exists
      return res
        .status(400)
        .json({ email: "A user has already registered with this address" });
    } else {

      let phoneNumber = req.body.phoneNumber;

      nexmo.verify.request({number: phoneNumber, brand: 'Issho'}, (err, result) => {
        if (err) {
          res.sendStatus(500);
        } else {

          let requestId = result.request_id;
          
          if (result.status == '0') {

            const newUser = new User ({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: req.body.password,
              requestId: result.request_id
            });

            console.log(newUser);

            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                
                newUser.password = hash;
                newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              });
            });
          } else {
            nexmo.verify.control({
              request_id: requestId,
              cmd: 'cancel'
            }, (err, result) => {
              console.log(err ? err : result)
            });
            res.status(401).send(result.error_text);
          }
        }
      })
    }
  });
});

router.post('/verify', (req, res) => {
  let pin = req.body.pin;
  let requestId = req.body.requestId;
 
  nexmo.verify.check({request_id: requestId, code: pin}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result && result.status == '0') { 
        // need to update user profile to show two factor accepted
        res.json(result);
      } else {
        res.status(401).send(result.error_text);
      }
    }
  });
});


router.post("/signin", (req, res) => {
  const { errors, isValid } = validateSignInInput(req.body);

  console.log(errors);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "This user does not exist" });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email };

        jwt.sign(
          payload,
          keys.secretOrKey,
          // Tell the key to expire in one hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Incorrect password" });
      }
    });
  });
});

// router.post(
//   '/:username/follow', 
//   function(req, res, next) {
//     var profileId = req.user._id;

//     User.findById(req.payload.id).then(function(user){
//       if (!user) { return res.sendStatus(401); }

//       return user.follow(profileId).then(function(){
//         return res.json({profile: req.profile.toProfileJSONFor(user)});
//       });
//     })
//     .catch(next);
//   }
// );

module.exports = router;
