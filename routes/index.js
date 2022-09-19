const router = require('express').Router();
const apiRoutes = require('./api');

// attatch /api to the beginning out the paths
router.use('/api', apiRoutes);

// Error handler for wrong routes
router.use((req, res) => {
    return res.send('Invalid Route!');
})

// export the module
module.exports = router;