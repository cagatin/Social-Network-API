const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// defining the Thought Schema
const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => moment(date).format('YYYY-MM-DD')
        },
        // USERNAME THAT CREATED THIS THOUGHT
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        //include virtuals in our JSON response
        toJson: {
            virtuals: true,
            getters: true
        }
    }
);

//reactionCount virtual that retrieves the length of the thought's reactions array field on query
thoughtSchema
    .virtual('reactionCount')
    //getter
    .get(() => this.reactions.length);

// Intitialize the Thought Model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;