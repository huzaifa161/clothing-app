const express = require('express');
const { createCollection, getCollections, getCollection } = require('../controllers/Collection');
const router = express.Router();


router.post('/new-collection', createCollection);


router.get('/all-collections', getCollections);

router.get('/:id', getCollection);

module.exports = router;