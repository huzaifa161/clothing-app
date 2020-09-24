const formidable = require('formidable');
const cloudinary = require('../config/cloudinary-config');
const Collection = require('../models/Collection');
const Brand = require('../models/Brand');
exports.createCollection = (req, res) => {

    let form = new formidable.IncomingForm();

    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {

        const collection = new Collection(fields);

        try {
            console.log(collection)
            if (files.image) {
                const result = await cloudinary.uploader.upload(files.image.path, { folder: 'collection' })
                collection.imageUrl = result.secure_url;
            }

            const savedCollection = await collection.save();
            const brand = await Brand.findById(collection.brand);

            brand.collections.push(savedCollection._id);            
            await brand.save();
            res.json({ msg: 'Success' });
        } catch (err) {
            res.status(400).json({ error: 'Something went wrong' });
        }




    })
}