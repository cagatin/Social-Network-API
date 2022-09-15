const mongoose = require('mongoose');
const Thought = require('./Thought');

// defining the User Schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        // TODO: ADD EMAIL VALIDATION HERE
    },
    // thoughts: array of _id values referencing the Thought model
    // friends: array of _id values referencing the User model (self referencing)
});

// TODO: Create virtual called friendCount that retrieves the length of the user's friends array field on query

module.exports;