const mongoose = require('mongoose');
const app = require('express');
const router = app.Router();
const uri = 'mongodb+srv://monkeymartin86:123soleil@wtasscluster.uq13ht3.mongodb.net/Ass4';

app.use(express.json());

app.listen(3000, () => console.log('Server started'));


//Function to connect to MongoDB
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure');
    }
}



connect();