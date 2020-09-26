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

exports.getCollections = async (req, res) => {
    try {
        const collections = await Collection.find().exec();
        res.json(collections);
    } catch (err) {
        res.json([]);
    }
}

exports.getCollection = async (req, res) => {
    const id = req.params.id;
    try {
        const collection = await Collection.findById(id).exec();
        res.json(collection)
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: 'Something went wrong' });
    }
}