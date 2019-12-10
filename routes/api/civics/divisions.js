const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys')

// List Divisions by Search
router.get(
	'/divisions/search/:query', 
	(req, res) => {
		axios.get(`https://www.googleapis.com/civicinfo/v2/divisions?query=${req.params.query}&key=${keys.googleCivicsApiKey}`)
  		.then(response => {
    		res.json(response.data.officials);
  		})
  		.catch(error => {
    		console.log(error);
  		});
	}
);

module.exports = router;