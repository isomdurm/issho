const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys')

router.get(
	'/house/bills/introduced', 
	(req, res) => {

		axios.get('https://api.propublica.org/congress/v1/115/house/bills/introduced.json', { 
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