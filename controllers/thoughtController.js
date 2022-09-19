const Thought = require('../models/Thought');

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

// Funtion to retieve specific thought based on _id route parameter
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


module.exports = {
    getThoughts,
    getSingleThought,
}