const mongoose = require('mongoose');

//This will NOT be a model, but rather, be used as the reaction fields subdocument schema in the THOUGHT model

// defining the Reaction Schema
const reactionSchema = mongoose.Schema({
    reactionId: {
        default: mongoose.Schema.ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        // TODO: 280 CHARACTER MAXIMUM
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // TODO: Create a getter method to format timestamp on query
    }
});
