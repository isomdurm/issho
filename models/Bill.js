const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillSchema = new Schema({

  id: {
  	type: String
  },

  number: {
    type: String
  },

  bill_uri: {
    type: String
  },

  title: {
    type: String
  },

  short_title: {
  	type: String
  },

  sponsor_title: {
    type: String
  },

  sponsor_id: {
    type: String
  },

  sponsor_name: {
  	type: String
  },

  sponsor_state: {
  	type: String
  },

  sponsor_party: {
  	type: String
  },

  sponsor_uri: {
  	type: String
  },

  congressdotgov_url: {
  	type: String
  },

  introduced_date: {
  	type: String
  },

  active: {
  	type: String
  },

  last_vote: {
  	type: String
  },

  house_passage: {
  	type: String
  },

  senate_passage: {
  	type: String
  },

  enacted: {
  	type: String
  },

  vetoed: {
  	type: String
  },

  cosponsors: {
  	type: Number
  },

  cosponsors_by_party: {
  	type: {}
  },

  committees: {
  	type: String
  },

  committee_codes: {
  	type: []
  },

  subcommittee_codes: {
  	type: []
  },

  primary_subject: {
  	type: String
  },

  summary: {
  	type: String
  },

  summary_short: {
  	type: String
  },

  latest_major_action_date: {
  	type: String
  },

  latest_major_action: {
  	type: String
  },

  issho_updated_at: {
  	type: Date,
  	default: Date.now
  },

  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = Bill = mongoose.model('bills', BillSchema);