const mongoose, { Schema } = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4 } = require('uuid');
const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    cellNumber: String,
    address1: {
        city: String,
        state: String,
        fullAddress: String
    },
    address2: {
        city: String,
        state: String,
        fullAddress: String
    },
    createdAt: {
        type: String,
        default: Date.now()
    },
    updatedAt: String,
    userType: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default:'USER'
    },
    profilePic: String
});

UserSchema.methods.encryptPassword = async function (password, size) {
    try {
        const hash = await bcrypt.hash(password, size);
        return hash;
    } catch (error) {
        console.log(error);
    }
}

UserSchema.pre('save', async function () {

    this.password = await this.encryptPassword(this.password, 12);

});

UserSchema.methods.authenticate = async function (password) {

    return await bcrypt.compare(password,this.password);
}
module.exports = mongoose.model('User', UserSchema);