import express from 'express';
import colors from 'colors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec, { SwaggerUiOptions } from './config/swagger';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import router from './router';
import db from './config/db';

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

// allow connections
const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true);
        } else {
            callback(new Error('CORS Error'));
        }
    },
};

server.use(cors(corsOptions));

// read form data
server.use(express.json());

server.use(morgan('dev'));
server.use('/api/products', router);

server.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, SwaggerUiOptions)
);

export default server;
