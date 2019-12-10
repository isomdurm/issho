const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Message = require('../../../models/Message');

router.get(
	"/", 
	(req, res) => {
    	Message.find()
      		.sort({ date: -1 })
      		.then(messages => res.json(messages))
      		.catch(err => res.status(400).json(err));
	}
);

router.get(
	"/:id", 
	(req, res) => {
		Message.find({ message: req.params.id })
    		.sort({ date: -1 })
    		.then(message => res.json(message))
    		.catch(err => res.status(400).json(err));
	}
);

router.post(
 	"/:id",
	(req, res) => {
		console.log(req.body);

	    const newMessage = new Message ({
	    	sender: req.body.sender,
	    	chat: req.body.chat,
	    	body: req.body.body
	    });

    	newMessage
    		.save()
    		.then(message => res.json(message));
    }
);

module.exports = router;
