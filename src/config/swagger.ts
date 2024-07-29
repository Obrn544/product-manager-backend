import swaggerJSDoc from 'swagger-jsdoc';
import { SwaggerUiOptions } from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products',
            },
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for products',
        },
    },
    apis: ['./src/router.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

const SwaggerUiOptions: SwaggerUiOptions = {
    customCss: `
    .topbar-wrapper .link {
        content: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Flogo&psig=AOvVaw1Bj3qosniXyU1esCaDeXos&ust=1722369044056000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDJnuqCzYcDFQAAAAAdAAAAABAE');
        height: 120px;
        width: auto;
    }
    .swagger-ui .topbar {
        background-color: #2b3b45;
    }
    `,
    customSiteTitle: 'Documentación REST API Express / TypeScript',
};

export default swaggerSpec;
export { SwaggerUiOptions };
