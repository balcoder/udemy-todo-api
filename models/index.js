const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('debug', true);

mongoose.connect(`mongodb+srv://${process.env.mongodbUser}:${process.env.mongodbPass}@cluster0.og1v7.mongodb.net/testdb?retryWrites=true&w=majority`,  { useNewUrlParser: true , useUnifiedTopology: true } )

mongoose.Promise = Promise;

module.exports.Todo = require('./todo.js');