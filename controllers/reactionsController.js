const Thought = require('../models/Thought');
const User = require('../models/User');

// Create a reaction stored in the Thought's reactions array field
// Route looks like: /api/thoughts/:thoughtId/reactions
const createReaction = async function (req, res) {
    try {
        // Find the Thought with associated thoughtId
        const thoughtData = Thought.findById({
            _id: req.params.thoughtId
        });
        // If no such Thought exists, return a 404 error.
        if (!thoughtData) {
            res.status(404).json({ message: "No such Thought exists with the route parameter!" });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    createReaction,
}