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


module.exports = {
    getThoughts,
}