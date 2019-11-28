const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MessageSchema = new Schema({

  sender: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  chat: {
  	type: Schema.Types.ObjectId,
  	ref: 'chats'
  },

  body: {
    type: String,
    required: true
  },

  media_urls: {
  	type: []
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('messages', MessageSchema);