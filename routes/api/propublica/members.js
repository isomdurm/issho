const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require('../../../config/keys');

const twitterAPI = require('node-twitter-api');


let bearerToken = "";
let bearerTokenSecret = "";

const twitter = new twitterAPI({
    consumerKey: keys.twitterApiKey,
    consumerSecret: keys.twitterApiSecret,
    callback: 'http://localhost:5000/api/twitter/oauth/bearer'
});

router.get(
  '/oauth/bearer',
  (req, res) => {
    twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
      if (error) {
        console.log("Error getting OAuth request token : " + error);
        res.json(error);
      } else {
        bearerToken = requestToken;
        bearerTokenSecret = requestTokenSecret;
        res.json(results);
      }
    });
  }
);

// List of Senate Members
router.get(
	'/senate', 
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
	'/house', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/116/house/members.json`, { 
  		headers: { 
    			'X-API-Key': keys.proPublicaApiKey 
  		}
		})
		.then(responses => {
      const membersArr = responses.data.results[0].members.map(function(val, i) {
        return {key: i, value: val};
      });

      membersArr.forEach(member => {
        axios.post(`http://localhost:5000/api/issho_members/${member.value.id}`, member.value)
        .then(response => {
          console.log(response);
        })
      })

      res.json(responses.data.results[0].members);
		})
		.catch(error => {
  		res.json(error);
		});
	}
);

// Seed Members of House to Database
router.get(
  '/house/seed', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/116/house/members.json`, { 
      headers: { 
          'X-API-Key': keys.proPublicaApiKey 
      }
    })
    .then(responses => {
      const membersArr = responses.data.results[0].members.map(function(val, i) {
        return {key: i, value: val};
      });

      membersArr.forEach(member => {
        axios.post(`http://localhost:5000/api/issho_members/${member.value.id}`, member.value)
        .then(response => {
          console.log(response);
        })
      })

      res.json(responses.data.results[0].members);
    })
    .catch(error => {
      res.json(error);
    });
  }
);

// List of House Members
router.get(
  '/senate/seed', 
  (req, res) => {

    axios.get(`https://api.propublica.org/congress/v1/116/senate/members.json`, { 
      headers: { 
          'X-API-Key': keys.proPublicaApiKey 
      }
    })
    .then(responses => {
      const membersArr = responses.data.results[0].members.map(function(val, i) {
        return {key: i, value: val};
      });

      membersArr.forEach(member => {
        axios.post(`http://localhost:5000/api/issho_members/${member.value.id}`, member.value)
        .then(response => {
          console.log(response);
        })
      })

      res.json(responses.data.results[0].members);
    })
    .catch(error => {
      res.json(error);
    });
  }
);

// Specific Member
router.get(
	'/:member_id', 
	(req, res) => {

		axios.get(`https://api.propublica.org/congress/v1/members/${req.params.member_id}.json`, { 
    		headers: { 
      			'X-API-Key': keys.proPublicaApiKey 
    		}
  		})
  		.then(response => {
        let responses = response;
        twitter.getTimeline("user_timeline", { screen_name: response.data.results[0].twitter_account }, bearerToken, bearerTokenSecret, function(error, data, response) {
          if (error) {
            res.json(error);
          } else {
            res.json({ data: responses.data, twitterData: data });
          }
        })
  		})
  		.catch(error => {
    		console.log(error);
  		});
	}
);

// List Current Senate Members by State
router.get(
	'/senate/state/:state_id', 
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
	'/house/state/:district_id', 
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
	'/:member_id/positions', 
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
	'/:member_id/:quarter', 
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