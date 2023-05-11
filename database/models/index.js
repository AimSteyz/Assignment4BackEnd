const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

// Export the all the models as an object
db.user = require("./user.model");
db.comment = require("./comment.model");
db.article = require("./article.model");

module.exports = db;
