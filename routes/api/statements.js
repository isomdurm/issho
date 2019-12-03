const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys')

// Recent Statements
router.get(
	'/statements/recent', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/statements/latest.json`, { 
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

// Statements by Specific Member
router.get(
	'/statements/members/:member_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/members/${req.params.member_id}/statements/116.json`, { 
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

// Statements by Specific Bill
router.get(
	'/statements/bill/:bill_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/bills/${req.params.bill_id}/statements.json`, { 
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

// Statements by Specific Committee
router.get(
	'/statements/:committee_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/statements/committees/${req.params.committee_id}.json`, { 
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