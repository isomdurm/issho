const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Comment = require('../../../models/Comment');
const validateCommentInput = require("../../../validations/comments");

router.get(
	"/", 
	(req, res) => {
    	Comment.find()
      		.sort({ date: -1 })
      		.then(comments => res.json(comments))
      		.catch(err => res.status(400).json(err));
	}
);

router.get(
	"/:id", 
	(req, res) => {
		Comment.find({ chat: req.params.id })
    		.sort({ date: -1 })
    		.then(comment => res.json(comment))
    		.catch(err => res.status(400).json(err));
	}
);

router.post(
 	"/:id",
	(req, res) => {
    	const { errors, isValid } = validateCommentInput(req.body);

	    if(!isValid){
	      return res.status(400).json(errors);
	    };

	    const newComment = new Comment({
	    });

    	newComment
    		.save()
    		.then(comment => res.json(comment));
    }
);

module.exports = router;
