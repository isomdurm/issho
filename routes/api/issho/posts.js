const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require('../../../models/Post');
const validatePostInput = require("../../../validations/posts");

router.get(
	"/", 
	(req, res) => {
    	Post.find()
      		.sort({ date: -1 })
      		.then(posts => res.json(posts))
      		.catch(err => res.status(400).json(err));
	}
);

router.get(
	"/:id", 
	(req, res) => {
		Post.find({ chat: req.params.id })
    		.sort({ date: -1 })
    		.then(post => res.json(post))
    		.catch(err => res.status(400).json(err));
	}
);

router.post(
 	"/:id",
	(req, res) => {
    	const { errors, isValid } = validatePostInput(req.body);

	    if(!isValid){
	      return res.status(400).json(errors);
	    };

	    const newPost = new Post({
	    });

    	newPost
    		.save()
    		.then(post => res.json(post));
    }
);

module.exports = router;
