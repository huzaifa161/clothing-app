const mongoose, { Schema } = require('mongoose');


const ProductSchema = new Schema({

    code: {
        type: String,
        required: true
    },
    description: String,
    salePrice: {
        type: Number,
        required: true
    },
    discountPrice: Number,
    discount: Number,
    images: [String],

    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    collection: {
        type: Schema.Types.ObjectId,
        ref: 'Collection'
    },
    avalaible: {
        type: Boolean,
        default: true
    },
    features: [{
        name: String,
        value: String
    }],
    colors: [{
        color: String,
        imageLink: String
    }],
    createdAt: {
        type: String,
        default: Date.now()
    },
    updatedAt: String,
    keywords: [String]
});

module.exports = mongoose.model('Product', ProductSchema);
