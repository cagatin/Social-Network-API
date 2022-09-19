const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// api/thought/
router.route('/')
    .get(getThoughts)
    .get(getSingleThought)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

// api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// api/thoughts/:thoughtId/reactions/:reactionsId
router.route(':thoughtId/reactions/:reactionsId').delete(deleteReaction);

module.exports = router;