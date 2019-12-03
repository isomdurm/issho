const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys')

// Congress Recent Bills (introduced, updated, active, passed, enacted, vetoed)
router.get(
	'/bills/congress/:type', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/congress/bills/${req.params.type}.json`, { 
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

// House Recent Bills (introduced, updated, active, passed, enacted, vetoed)
router.get(
  '/bills/house/:type', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/116/house/bills/${req.params.type}.json`, { 
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

// Specific Bills
router.get(
  '/bills/:id', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/116/bills/${req.params.id}.json`, { 
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

// Bills By Search Parameters
router.get(
  '/bills/subjects/search', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/bills/subjects.json?query=${req.query}`, { 
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

// Specific Bill Cosponsors
router.get(
  '/bills/:id/cosponsors', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/116/bills/${req.params.id}/cosponsors.json`, { 
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

// Specific Bill Subjects
router.get(
  '/bills/:id/subjects', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/116/bills/${req.params.id}/subjects.json`, { 
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

// Recent Bills By Member
router.get(
  '/bills/:type/members/:member_id', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/members/${req.params.member_id}/bills/${req.params.type}.json`, { 
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