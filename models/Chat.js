const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ChatSchema = new Schema({
  users: {
  	type: []
  },

  name: {
  	type: String
  },

  color: {
  	type: String
  },

  emoji: {
  	type: String
  },

  image_url: {
  	type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('chats', ChatSchema);