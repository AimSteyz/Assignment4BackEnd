const mongoose = require('mongoose');

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        roles: {
            type: Boolean,
            default: false
        }
    })
);

module.exports = User;