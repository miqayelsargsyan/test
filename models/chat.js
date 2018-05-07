const mongoose = require('mongoose');

let ChatSchema = new mongoose.Schema({
    name: {
        type: String
    },
    chat: {
        type: String
    },
    group: {
        type: Boolean
    }
})

let Chat = mongoose.model('Chat', ChatSchema );

module.exports = {Chat}