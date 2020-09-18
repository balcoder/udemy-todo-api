const mongoose = require('mongoose');

// create the schema
const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    } 
})

// compile the model
const Todo = mongoose.model('Todo', todoSchema);

// export the model
module.exports = Todo;