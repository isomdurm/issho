const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Member = require('../../../models/Member');

router.get(
	"/", 
	(req, res) => {
    	Member.find()
      		.sort({ date: -1 })
      		.then(members => res.json(members))
      		.catch(err => res.status(400).json(err));
	}
);

router.get(
	"/:id", 
	(req, res) => {
		Member.find({ member_id: req.params.id })
    		.sort({ date: -1 })
    		.then(member => res.json(member))
    		.catch(err => res.status(400).json(err));
	}
);

router.post(
 	"/:id",
	(req, res) => {
		console.log(req.body);
		console.log("HERE");

	    const newMember = new Member({
	    	id: req.body.id,
	    	first_name: req.body.first_name,
	    	middle_name: req.body.middle_name,
	    	last_name: req.body.last_name,
	    	suffix: req.body.suffix,
	    	date_of_birth: req.body.date_of_birth,
	    	gender: req.body.gender,
	    	party: req.body.party,
	    	leadership_role: req.body.leadership_role,
	    	fec_candidate_id: req.body.fec_candidate_id,
	    	contact_form: req.body.contact_form,
	    	seniority: req.body.seniority,
	    	next_election: req.body.next_election,
	    	total_votes: req.body.total_votes,
	    	missed_votes: req.body.missed_votes,
	    	total_present: req.body.total_present,
	    	last_updated: req.body.last_updated,
	    	ocd_id: req.body.ocd_id,
	    	office: req.body.office,
	    	phone: req.body.phone,
	    	fax: req.body.fax,
	    	state: req.body.state,
	    	district: req.body.district,
	    	geoid: req.body.geoid,
	    	missed_votes_pct: req.body.missed_votes_pct,
	    	votes_with_party_pct: req.body.votes_with_party_pct,
	    	votes_against_party_pct: req.body.votes_against_party_pct,
	    	rss_url: req.body.rss_url,
	    	url: req.body.url,
	    	govtrack_id: req.body.govtrack_id,
	    	cspan_id: req.body.cspan_id,
	    	votesmart_id: req.body.votesmart_id,
	    	twitter_account: req.body.twitter_account,
	    	facebook_account: req.body.facebook_account,
	    	youtube_account: req.body.youtube_account
	    });

    	newMember
    		.save()
    		.then(member => res.json(member))
    		.catch(err => console.log(err));
    }
);

module.exports = router;
