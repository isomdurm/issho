const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Chat = require('../../models/Chat');
const validateChatInput = require("../../validations/chats");

const Message = require('../../models/Message');
const validateMessageInput = require("../../validations/messages");

router.get(
	"/", 
	(req, res) => {
    	Chat.find()
      		.sort({ date: -1 })
      		.then(chats => res.json(chats))
      		.catch(err => res.status(400).json(err));
	}
);

router.get(
	"/:id", 
	(req, res) => {
		Message.find({ chat: req.params.id })
    		.sort({ date: -1 })
    		.then(messages => res.json(messages))
    		.catch(err => res.status(400).json(err));
	}
);

router.post(
 	"/:id",
	(req, res) => {
    	const { errors, isValid } = validateChatInput(req.body);

	    if(!isValid){
	      return res.status(400).json(errors);
	    };

	    const newChat = new Chat({
	        users: req.body.users,
	        name: req.body.name, 
	        color: req.body.color,
	        emoji: req.body.emoji
	    });

    	newChat
    		.save()
    		.then(chat => res.json(chat));
    }
);

module.exports = router;
