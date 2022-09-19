const mongoose = require('mongoose');
const emailValidation = require('../utils/emailValidation');

// defining the User Schema
const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [emailValidation, "Please enter a valid Email!"]

        },
        // thoughts: array of _id values referencing the Thought model
        thoughts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        // friends: array of _id values referencing the User model (self referencing)
        friends: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        //include virtruals in our JSON response
        toJson: {
            virtuals: true
        }
    }
);

// friendCount virtual that retrieves the length of the user's friends array field on query
userSchema
    .virtuals('friendCount')
    .get(() => friends.length);

// Initialize User Model
const User = mongoose.model('User', userSchema);

module.exports = User;