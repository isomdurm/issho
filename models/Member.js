const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({

  id: {
  	type: String,
  	required: true
  },

  first_name: {
    type: String,
    required: true
  },

  middle_name: {
    type: String
  },

  last_name: {
    type: String,
    required: true
  },

  suffix: {
  	type: String
  },

  date_of_birth: {
    type: String
  },

  gender: {
    type: String
  },

  party: {
  	type: String
  },

  leadership_role: {
  	type: String
  },

  fec_candidate_id: {
  	type: String
  },

  contact_form: {
  	type: String
  },

  seniority: {
  	type: String
  },

  next_election: {
  	type: String
  },

  total_votes: {
  	type: String
  },

  missed_votes: {
  	type: String
  },

  total_present: {
  	type: String
  },

  last_updated: {
  	type: String
  },

  ocd_id: {
  	type: String
  },

  phone: {
  	type: String
  },

  fax: {
  	type: String
  },

  state: {
  	type: String
  },

  district: {
  	type: String
  },

  geoid: {
  	type: String
  },

  missed_votes_pct: {
  	type: String
  },

  votes_with_party_pct: {
  	type: String
  },

  votes_against_party_pct: {
  	type: String
  },

  rss_url: {
  	type: String
  },

  url: {
  	type: String
  },

  govtrack_id: {
  	type: String
  },

  cspan_id: {
  	type: String
  },

  votesmart_id: {
  	type: String
  },

  twitter_account: {
  	type: String
  },

  facebook_account: {
  	type: String
  },

  youtube_account: {
  	type: String
  },

  current_party: {
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

module.exports = Member = mongoose.model('members', MemberSchema);