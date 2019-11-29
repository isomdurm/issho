const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  body: {
  	type: String
  },

  media_url: {
  	type: []
  },

  location: {
  	type: String
  },

  privacy: {
  	type: String
  },

  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = Post = mongoose.model('posts', PostSchema);