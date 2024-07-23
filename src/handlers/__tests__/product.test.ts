import request from 'supertest';
import server from '../../server';

describe('POST /api/products', () => {
    it('should create a new product', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Monitor Curvo 34 pulgadas',
            price: 300,
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('data');

        expect(response.status).toBe(404);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('error');
    });
});
