const User = require('../models/User');

const getUsers = function (req, res) {
    try {
        const userData = User.find();
        if (!userData) {
            res.status(404).json({ message: "No users found in the database!" });
        }
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}