const express = require('express');

const router = express.Router();

const { createBrand, getBrands } = require('../controllers/Brand');


router.post('/new-brand', createBrand);
router.get('/all-brands', getBrands);

module.exports = router;