import express from 'express';
import router from './router';
import db from './config/db';

async function connectDB() {
    try {
        await db.authenticate();
        db.sync();
        console.log('Successful connection to the database');
    } catch (error) {
        console.log(error);
        console.log('There was an error connecting to the database');
    }
}

connectDB();

const server = express();

server.use('/api/products', router);

export default server;
