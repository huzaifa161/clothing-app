const formidable = require('formidable');
const cloudinary = require('../config/cloudinary-config');
const Brand = require('../models/Brand');


exports.createBrand = (req, res) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
        if (err) return res.status(400).json({ error: 'Image could not be uploaded' });
        try {
            const result = await cloudinary.uploader.upload(files.image.path, { folder: 'brand' })
            const brand = new Brand(fields);
            brand.imageUrl = result.secure_url;

            await brand.save()

            res.json({ msg:'Success' });

        } catch (err) {
            res.status(400).json({ error: 'Something went wrong' });   
        }
    })
}


exports.getBrands = async (req, res) => {
    try {
        const brands = await Brand.find().exec();
        res.json(brands);
    } catch (err) {
        res.json([]);
    }
}