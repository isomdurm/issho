const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys')

// List Representatives by Address
router.get(
	'/representatives/address/:address', 
	(req, res) => {
		axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?address=${req.params.address}&key=${keys.googleCivicsApiKey}`)
  		.then(response => {
    		res.json(response.data.officials);
  		})
  		.catch(error => {
    		console.log(error);
  		});
	}
);

// List Representatives by Division
router.get(
  '/representatives/division/:division', 
  (req, res) => {
    axios.get(`https://www.googleapis.com/civicinfo/v2/representatives/${req.params.division}&key=${keys.googleCivicsApiKey}`)
      .then(response => {
        res.json(response.data.officials);
      })
      .catch(error => {
        console.log(error);
      });
  }
);

module.exports = router;