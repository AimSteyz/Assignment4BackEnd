const mongoose = require('mongoose');

const Comment = mongoose.model(
    "Comment",
    new mongoose.Schema({
        content: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        article: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Article",
            required: true,
            autoPopulate: true
        },
        upVotes: {
            type: Number,
            default: 0,
        },
    })
);
Comment.schema.plugin(require('mongoose-autopopulate'));

module.exports = Comment;
