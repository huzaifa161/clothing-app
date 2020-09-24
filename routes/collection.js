const express = require('express');
const { createCollection } = require('../controllers/Collection');
const router = express.Router();


router.post('/new-collection', createCollection);

module.exports = router;