const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'duskpr6lm',
    api_key: '298375442355119',
    api_secret: '4j6b5UMbMxXd8wmHk4kooBn0FLQ'
});

module.exports = cloudinary;