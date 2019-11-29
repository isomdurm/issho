const express = require("express");
const router = express.Router();
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI("apikey");

router.get('/sources', (req, res) => {
  newsapi.v2.sources({
    country: "us"
  }).then(response => {
    let sources = response.sources
    let sourcesArray = [];


  	sources.map(obj => { 
   		sourcesArray.push(obj["id"]);
	});

	res.json(sourcesArray);
  });
});

router.get('/top-headlines', (req, res) => {
  newsapi.v2.topHeadlines({
    sources: 'the-new-york-times,nbc-news,bbc-news,mashable,the-verge'
  }).then(response => {
    res.json(response);
  });
});

module.exports = router;