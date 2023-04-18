const mongoose = require('mongoose');
const app = require('express');
const uri = 'mongodb+srv://monkeymartin86:123soleil@wtasscluster.uq13ht3.mongodb.net/Ass4';

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure');
    }
}

connect();