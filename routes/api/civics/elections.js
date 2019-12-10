const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys')


// List of Elections
router.get(
	'/', 
	(req, res) => {
		axios.get(`https://www.googleapis.com/civicinfo/v2/elections?key=${keys.googleCivicsApiKey}`)
  		.then(response => {
    		res.json(response.data);
  		})
  		.catch(error => {
    		console.log(error);
  		});
	}
);

// Election Voter Information
router.get(
  '/:election_id/voterInfo', 
  (req, res) => {
    axios.get(`https://www.googleapis.com/civicinfo/v2/voterinfo?electionId=${req.params.election_id}`)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
);

module.exports = router;