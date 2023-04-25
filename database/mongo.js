const mongoose = require('mongoose')
require('dotenv').config();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    w: "majority"
}

try {
    mongoose.connect("mongodb+srv://wtassign:azerty@assignment.sbkeg7m.mongodb.net/", options)
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log("Connection error", err))
} catch (err) {
    console.log("Connection error", err)
}
