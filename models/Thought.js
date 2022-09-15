const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

// defining the Thought Schema
const thoughtSchema = mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        // TODO: MUST BE 1-280 CHARACTERS
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // TODO: USE A GETTER METHOD TO FORMAT TIMESTAMP ON QUERY
    },
    // USERNAME THAT CREATED THIS THOUGHT
    username: {
        type: String,
        required: true
    }
    // SIMILAR TO REPLIES
    // reactions: { ARRAY OF NESTED DOCUMENTS CREATED W reactionSchema }
});

//TODO: Create a virtual called reactionCount that retrieves the length fo the thought's reactions array field on query

module.exports;