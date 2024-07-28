import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors';

export async function connectDB() {
    try {
        await db.authenticate();
        db.sync();
        // console.log(colors.magenta('Successful connection to the database'));
    } catch (error) {
        // console.log(error);
        console.log(
            colors.red.bold('There was an error connecting to the database')
        );
    }
}

connectDB();

// express instance
const server = express();

// read form data
server.use(express.json());

server.use('/api/products', router);

server.get('/api', (req, res) => {
    res.json({ msg: 'Desde API' });
});

export default server;
