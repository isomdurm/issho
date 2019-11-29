const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get(
	'/', 
	(req, res) => {
		axios.get('https://www.googleapis.com/civicinfo/v2/representatives?address=23455%20Highway%201&key=')
  		.then(response => {
    		res.json(response.data.officials);
  		})
  		.catch(error => {
    		console.log(error);
  		});
	}
);

module.exports = router;