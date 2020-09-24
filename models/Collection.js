const mongoose, { Schema } = require('mongoose');

const CollectionSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    description: String,
    images: [String],
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    createdAt: {
        type: String,
        default:Date.now()
    }
});

module.exports = mongoose.model('Collection', CollectionSchema);
