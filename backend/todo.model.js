const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_task: {
        type: String
    },
    todo_details: {
        type: String
    },
    todo_by: {
        type: Date
    },
    todo_completed: {
        type: Boolean
    }
});


module.exports = mongoose.model('Todo', Todo);