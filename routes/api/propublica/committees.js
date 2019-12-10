const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys')

// List of Senate Committees
router.get(
	'/committees/senate', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/senate/committees.json`, { 
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

// List of House Committees
router.get(
	'/committees/house', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/house/committees.json`, { 
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

// Specific Senate Committee
router.get(
	'/committees/senate/:committee_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/senate/committees/${req.params.committee_id}.json`, { 
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

// Specific House Committee
router.get(
	'/committees/house/:committee_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/house/committees/${req.params.committee_id}.json`, { 
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

// Recent Senate Committee Hearings
router.get(
	'/committees/senate/:committee_id/hearings', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/senate/committees/${req.params.committee_id}/hearings.json`, { 
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

// Recent House Committee Hearings
router.get(
	'/committees/house/:committee_id/hearings', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/house/committees/${req.params.committee_id}/hearings.json`, { 
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

// Specific Senate Subcommittee
router.get(
	'/committees/senate/:committee_id/subcommittees/:subcommittee_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/senate/committees/${req.params.committee_id}/subcommittees/${req.params.subcommittee_id}/hearings.json`, { 
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

// Specific House Subcommittee
router.get(
	'/committees/house/:committee_id/subcommittees/:subcommittee_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/house/committees/${req.params.committee_id}/subcommittees/${req.params.subcommittee_id}/hearings.json`, { 
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