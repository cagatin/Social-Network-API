const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// api/users
router.route('/')
    .get(getUsers)
    .get(getSingleUser)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

// export the module
module.exports = router;