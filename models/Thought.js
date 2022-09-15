const mongoose = require('mongoose');

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

module.exports;