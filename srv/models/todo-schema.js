const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: { type: String },
    completed: { type: Boolean }
  }, {
    collection: 'todos'
  });

module.exports = mongoose.model('ToDo', todoSchema)