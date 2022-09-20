// Library for generating unique userNames
const { generateFromEmail, generateUsername } = require("unique-username-generator");
const db = require('../config/connection');
const { User, Thought } = require('../models');

//array containing thoughts
const thoughtsArr = [
    "I hate Mondays!",
    "CSS is my passion!",
    "Did anyone catch House of the Dragons the other day? Crazy episode!",
    "The new Lord of the Rings series is amazing!",
    "AI will take over the world!",
    "What even is a for loop?"
];

//array containing generated users to populate thoughtsData
const usersArr = [];

//array containing all our username-email pairs
const usersData = [];

//array containing all thought-username pairs
const thoughtsData = [];

// Function to generate random username/email pairs
const generateUsers = function () {
    // Populate the usersData array
    for (let i = 0; i < 10; i++) {
        let testEmail = `testemail${i}@email.com`;
        let testUsername = generateUsername("", 2, 10);
        let obj = {
            userName: testUsername,
            email: testEmail
        }
        usersData.push(obj);
        usersArr.push(testUsername);
    }
}

// Function to create thoughtText-username pairs
const generateThoughts = function () {
    for (let i = 0; i < thoughtsData.length; i++) {
        let obj = {
            thoughtText: thoughtsData[i],
            username: Math.floor(Math.random() * usersArr.length)       //retrieve a random username from the usersData array
        }
        thoughtsData.push(obj);
    }
}

// If there is an error connecting to MongoDB, log the error.
db.on('error', (err) => console.log(err));

// Once the connection is open, seed the data
db.once('open', async () => {
    console.log('---CONNECTION TO MONGODB ESTABLISHED---');

    // Delete any persistent data in the User and Thought models
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert our Users data into the Model
    await User.collection.insertMany(usersData);
    console.log('---USER MODEL SEEDING COMPLETE---');

    // Insert our Thought collections into the Model
    await Thought.collection.insertMany(thoughtsData);
    console.log('---THOUGHT MODEL SEEDING COMPLETE---');

    // Log the tables
    console.table(usersData);
    console.table(thoughtsData);

    console.log('---DATABASE SEEDING COMPLETE---');
    process.exit(0);
});