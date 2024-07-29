import express from 'express';
import colors from 'colors';
import swaggerUi from 'swagger-ui-express';
import router from './router';
import db from './config/db';
import swaggerSpec from './config/swagger';

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

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default server;
