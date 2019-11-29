const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys')

router.get(
	'/', 
	(req, res) => {
		axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?address=23455%20Highway%201&key=${keys.googleCivicsApiKey}`)
  		.then(response => {
    		res.json(response.data.officials);
  		})
  		.catch(error => {
    		console.log(error);
  		});
	}
);

module.exports = router;