import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors';

async function connectDB() {
    try {
        await db.authenticate();
        db.sync();
        console.log(colors.magenta('Successful connection to the database'));
    } catch (error) {
        // console.log(error);
        console.log(
            colors.red.bold('There was an error connecting to the database')
        );
    }
}

connectDB();

const server = express();

server.use('/api/products', router);

export default server;
