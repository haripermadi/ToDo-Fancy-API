const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true,'username required!'],
  },
  email: {
    type: String,
    required: [true,'Email required!'],
    unique: true
  },
  password: {
    type: String,
    min:[6,'Too short!, min 6 character'],
    max: [12,'Too long, max 12 character']
  },
  role: String,
  createdAt: { 
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User