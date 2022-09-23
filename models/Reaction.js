const mongoose = require('mongoose');
const moment = require('moment');

//This will NOT be a model, but rather, be used as the reaction fields subdocument schema in the THOUGHT model

// defining the Reaction Schema
const reactionSchema = new mongoose.Schema({
    reactionId: {
        default: mongoose.Schema.ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => moment(date).format('YYYY-MM-DD')
    }
});

module.exports = reactionSchema;