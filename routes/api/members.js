const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys')

// List of Senate Members
router.get(
	'/members/senate', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/senate/members.json`, { 
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

// List of House Members
router.get(
	'/members/house', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/house/members.json`, { 
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

// Specific Member
router.get(
	'/members/:member_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/members/${req.params.member_id}.json`, { 
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

// List Current Senate Members by State
router.get(
	'/members/senate/state/:state_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/members/senate/${req.params.state_id}/current.json`, { 
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

// List Current House Members by District
// For states with at-large districts (AK, DE, MT, ND, SD, VT, WY), territories (GU, AS, VI, MP), commonwealths (PR) and the District of Columbia, use a district value of 
router.get(
	'/members/house/state/:district_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/members/house/${req.params.district_id}/current.json`, { 
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

// List Specific Member's Positions
router.get(
	'/members/:member_id/positions', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/members/${req.params.member_id}/votes.json`, { 
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

// List Quarterly Expenses by Specific House Member
router.get(
	'/members/:member_id/:quarter', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/members/${req.params.member_id}/office_expenses/2019/${req.params.quarter}.json`, { 
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