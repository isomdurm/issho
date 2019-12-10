const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Bill = require('../../../models/Bill');

router.get(
	"/", 
	(req, res) => {
    	Bill.find()
      		.sort({ date: -1 })
      		.then(bills => res.json(bills))
      		.catch(err => res.status(400).json(err));
	}
);

router.get(
	"/:id", 
	(req, res) => {
		Bill.find({ id: req.params.id })
    		.sort({ date: -1 })
    		.then(bill => res.json(bill))
    		.catch(err => res.status(400).json(err));
	}
);

router.post(
 	"/:id",
	(req, res) => {

	    const newBill = new Bill({
	    	id: req.body.bill_id,
	    	number: req.body.number,
	    	bill_uri: req.body.bill_uri,
	    	title: req.body.title,
	    	short_title: req.body.short_title,
	    	sponsor_title: req.body.sponsor_title,
	    	sponsor_id: req.body.sponsor_id,
	    	sponsor_name: req.body.sponsor_name,
	    	sponsor_state: req.body.sponsor_state,
	    	sponsor_party: req.body.sponsor_party,
	    	sponsor_uri: req.body.sponsor_uri,
	    	congressdotgov_url: req.body.congressdotgov_url,
	    	introduced_date: req.body.introduced_date,
	    	active: req.body.active,
	    	last_vote: req.body.last_vote,
	    	house_passage: req.body.house_passage,
	    	senate_passage: req.body.senate_passage,
	    	enacted: req.body.enacted,
	    	vetoed: req.body.vetoed,
	    	cosponsors: req.body.cosponsors,
	    	cosponsors_by_party: req.body.cosponsors_by_party,
	    	committees: req.body.committees,
	    	committee_codes: req.body.committee_codes,
	    	subcommittee_codes: req.body.subcommittee_codes,
	    	primary_subject: req.body.primary_subject,
	    	summary: req.body.summary,
	    	summary_short: req.body.summary_short,
	    	latest_major_action_date: req.body.latest_major_action_date,
	    	latest_major_action: req.body.latest_major_action
	    });

    	newBill
    		.save()
    		.then(bill => res.json(bill))
    		.catch(err => console.log(err));
    }
);

module.exports = router;
