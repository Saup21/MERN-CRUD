const mongoose = require('mongoose')

const FriendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const FriendModel = mongoose.model('friends', FriendSchema)

module.exports = FriendModel
