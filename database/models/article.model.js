const mongoose = require('mongoose');

const Article = mongoose.model(
    "Article",
    new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        },
        resolved: {
            type: Boolean,
            default: false
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        rating: {
            type: Number,
            default: 0,
            required: true
        },
        numberOfRatings: {
            type: Number,
            default: 0,
            required: true
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
                autoPopulate: true
            }
        ]
    })
);
Article.schema.plugin(require('mongoose-autopopulate'));

module.exports = Article;
