const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let listSchema = new Schema({
    name: { type: String },
  }, {
    collection: 'todo_lists'
  });

module.exports = mongoose.model('ToDoList', listSchema)