const User = require('../models/User');

// Get all users
const getUsers = async function (req, res) {
    try {
        // Find all Users.
        const userData = await User.find();
        // If no user exists in our database, return error 404.
        if (!userData) {
            res.status(404).json({ message: "No users found in the database!" });
        }
        // Otherwise, return the user data.
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Get a single User by _id , along with its populated thought and friend data
const getSingleUser = async function (req, res) {
    try {
        // Find single user based on ID of the route paramater. 
        const userData = await User.findById(req.params.userId);
        // If no such user exists, return a 404 error.
        if (!userData) {
            res.status(404).json({ message: "No users found in the database!" });
        }
        // Retrieve single user and populate Thought and Friend data
        let selectedUser = userData
            .populate('thoughts')
            .populate('friends');

        // Error handling. Something went wrong with population.
        if (!selectedUser) {
            res.status(404).json({ message: "Error in populating selected user data!" });
        }
        // Otherwise, return the selected user
        res.status(200).json(selectedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Create a new User
const createUser = async function (req, res) {
    try {
        // Create a new user
        /*  data from req.body should look like so:
            {
                "username": "lernantino",
                "email": "lernantino@gmail.com"
            }
        */
        const newUserData = await User.create(req.body);
        // In the event that creation failed (username/email is NOT unique, return error).
        if (!newUserData) {
            res.status(404).json({ message: "Error in creating new user!" });
        }
        // return the newly created user.
        res.status(200).json(newUserData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Function to UPDATE User data based on a route parameter
const updateUser = async function (req, res) {
    try {
        // Retrieve the user by the ID of the route parameter
        const userData = await User.findOneAndUpdate(
            { _id: req.params.id },
            { username: req.params.username }
        );
        // Error: User with the specific ID is not found. Update did not take place.
        if (!userData) {
            res.status(404).json({ message: "Error in updating User. Update Failed" });
        }
        // Return the updated User Data.
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Function to DELETE a User based on a route parameter
const deleteUser = async function (req, res) {
    try {
        // Look for the user w/ the associated ID value and delete it.
        const userData = await User.findOneAndDelete({ _id: req.params.id });
        // Error: Could not delete user
        if (!userData) {
            res.status(404).json({ message: "Could not delete User!" });
        }
        // Otherwise, return a success message.
        res.status(200).json({ message: "Sucessfully deleted user." });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
}