const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

  firstName: {
    type: String,
    required: true
  },

  middleName: {
    type: String
  },

  lastName: {
    type: String,
    required: true
  },

  suffixName: {
    type: String
  },

  dateOfBirth: {
    type: String
  },

  gender: {
    type: String
  },

  ethnicity: {
    type: String
  },

  height: {
    type: String
  },

  weight: {
    type: String
  },

  email: {
    type: String,
    required: true
  },

  username: {
    type: String
  },

  password: {
    type: String,
    required: true
  },

  following: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'users' 
  }],

  bio: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }

});

UserSchema.methods.follow = function(id) {
  if (this.following.indexOf(id) === -1) {
    this.following.push(id);
  }

  return this.save();
};

UserSchema.methods.unfollow = function(id){ 
  this.following.remove(id);
  
  return this.save();
};

module.exports = User = mongoose.model('users', UserSchema);