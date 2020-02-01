const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: 'Please enter your first name',
        default: ''
    },
    lastName: {
        type: String,
        trim: true,
        required: 'Please enter your last name',
        default: ''
    },
    email: {
        type: String,
        trim: true,
        required: 'Please enter your email address',
        default: ''
    },
    photo: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('User', UserSchema);