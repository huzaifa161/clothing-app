const express = require('express');

const router = express.Router();

const { createBrand, getBrands, getBrand } = require('../controllers/Brand');



router.post('/new-brand', createBrand);

router.get('/all-brands', getBrands);

router.get('/:id', getBrand);

module.exports = router;