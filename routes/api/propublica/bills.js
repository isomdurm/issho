const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../../config/keys')

// Senate Recent Bills (introduced, updated, active, passed, enacted, vetoed)
router.get(
	'/senate/:type', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/senate/bills/${req.params.type}.json`, { 
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
  '/house/:type', 
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

// Seed Members of House to Database
router.get(
  '/house/:type/seed', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/116/house/bills/${req.params.type}.json`, { 
      headers: { 
          'X-API-Key': keys.proPublicaApiKey 
      }
    })
    .then(responses => {
      const billsArr = responses.data.results[0].bills.map(function(val, i) {
        return {key: i, value: val};
      });

      billsArr.forEach(bill => {
        axios.post(`http://localhost:5000/api/issho_bills/${bill.value.id}`, bill.value)
        .then(response => {
          console.log(response);
        })
      })

      res.json(responses.data.results[0].bills);
    })
    .catch(error => {
      res.json(error);
    });
  }
);



// Specific Bills
router.get(
  '/:id', 
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
  '/subjects/search', 
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
  '/:id/cosponsors', 
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
  '/:id/subjects', 
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
  '/:type/members/:member_id', 
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