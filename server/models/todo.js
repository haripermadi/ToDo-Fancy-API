const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  task:  String,
  note: String,
  status: {
    type:Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: { 
    type: Date,
    default: Date.now
  },
  updateAt : Date,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo