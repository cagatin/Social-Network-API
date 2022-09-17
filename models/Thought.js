const mongoose = require('mongoose');

// defining the Thought Schema
const thoughtSchema = mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
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
    },
    reactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reaction'
    }]
});

//reactionCount virtual that retrieves the length of the thought's reactions array field on query
thoughtSchema
    .virtual('reactionCount')
    //getter
    .get(() => this.reactions.length);

// Intitialize the Thought Model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;