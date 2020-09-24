const mongoose = require('mongoose');
const { Schema } = mongoose;
const BrandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    imageUrl: String,
    createdAt: {
        type: String,
        default:Date.now()
    },
    collections: [{
        type: Schema.Types.ObjectId,
        ref: 'Collection'
    }]
});

module.exports =  mongoose.model('Brand', BrandSchema);
