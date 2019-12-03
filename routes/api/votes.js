const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys')

// Senate Recent Votes
router.get(
	'/votes/senate/recent', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/senate/votes/recent.json`, { 
    		headers: { 
      			'X-API-Key': keys.proPublicaApiKey 
    		}
  		})
  		.then(response => {
    		res.json(response.data);
  		})
  		.catch(error => {
    		console.log(error);
  		});
	}
);

// House Recent Votes
router.get(
  '/votes/house/recent', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/house/recent.json`, { 
        headers: { 
            'X-API-Key': keys.proPublicaApiKey 
        }
      })
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
);

// Senate Nomination Votes
router.get(
  '/votes/nominations', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/116/nominations.json`, { 
        headers: { 
            'X-API-Key': keys.proPublicaApiKey 
        }
      })
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
);

// Specific Roll Call Votes Senate
router.get(
  '/votes/senate/:session_id/votes/:roll_call_number', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/116/senate/sessions/${req.params.session_id}/votes/${req.params.roll_call_number}.json`, { 
        headers: { 
            'X-API-Key': keys.proPublicaApiKey 
        }
      })
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
);

// Specific Roll Call Votes House
router.get(
  '/votes/house/:session_id/votes/:roll_call_number', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/116/house/sessions/${req.params.session_id}/votes/${req.params.roll_call_number}.json`, { 
        headers: { 
            'X-API-Key': keys.proPublicaApiKey 
        }
      })
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
);

module.exports = router;