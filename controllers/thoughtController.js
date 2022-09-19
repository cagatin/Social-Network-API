const Thought = require('../models/Thought');
const User = require('../models/User');

// Function to READ all thoughts
const getThoughts = async function (req, res) {
    try {
        // Retrieve all Thoughts
        const thoughtData = await Thought.find();
        // If no thoughts exist, return an error.
        if (!thoughtData) {
            res.status(404).json({ message: "No thought data exists!" });
        }
        res.status(200).json(thoughtData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Function to retieve specific thought based on _id route parameter
const getSingleThought = async function (req, res) {
    try {
        const thoughtData = await Thought.findById({
            _id: req.params.id
        });
        // If no thought matches the ID, return an error
        if (!thoughtData) {
            res.status(404).json({ message: "ID value does not match any Thought data" });
        }
        // Otherwise, return the thought data
        res.status(200).json(thoughtData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Function to create a new Thought.
const createThought = async function (req, res) {
    try {
        /* example data
        {
            "thoughtText": "Here's a cool thought...",
            "username": "lernantino",
            "userId": "5edff358a0fcb779aa7b118b"
        }
        */
        // Create the new Thought
        const thoughtData = await Thought.create(req.body);
        // In the event that there is an error creating the Thought, return an error.
        if (!thoughtData) {
            res.status(404).json({ message: "Could not create Thought!" });
        }
        // Push the created thought's _id to the associated user's thoughts array field
        let userData = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thoughtData._id } },
            { new: true }
        );
        // If the user data did not update, return an error.
        if (!userData) {
            res.status(404).json({ message: "Could not push new Thought ID into associated user's thought array!" });
        }
        // If the all the above is successful, return the newly created thought
        res.status(200).json(thoughtData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Function to UPDATE a Thought based on passed in route parameter _id
const updateThought = async function (req, res) {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            { thoughtText: req.body.thoughtText }
        );
        // In the event a Thought with the specific ID is not found, return 404 error.
        if (!thoughtData) {
            res.status(404).json({ message: "Error in updating Thought. Thought ID could not be found" });
        }
        // Return the updated User Data.
        res.status(200).json(thoughtData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Function to DELETE based on the ID value of the route parameter
const deleteThought = async function (req, res) {
    try {
        // Delete the Thought based on the ID of the route parameter
        const thoughtData = await Thought.findByIdAndDelete(req.params.id);
        // If the deletion was unsucessful (ID not found), throw an error 404.
        if (!thoughtData) {
            res.status(404).json({ message: "Could not delete thought. Please supply a valid ID" });
        }
        // Otherwise, send a success message.
        res.status(200).json({ message: "Thought sucessfully deleted!" });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
}