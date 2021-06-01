const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: { type: String },
    completed: { type: Boolean },
    list: { type: String }
  }, {
    collection: 'todos'
  });

module.exports = mongoose.model('ToDo', todoSchema)