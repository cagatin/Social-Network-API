const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Attatch the user/thought paths to the routes.
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;