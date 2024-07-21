import { Router } from 'express';
import { createProduct } from './handlers/product';
import { body } from 'express-validator';

const router = Router();

// routing
router.get('/', (req, res) => {
    res.json('Desde GET');
});

router.post(
    '/',
    // validation
    body('name')
        .notEmpty()
        .withMessage('El nombre del producto no puede ir vacío'),
    body('price')
        .isNumeric()
        .withMessage('Valor no válido')
        .notEmpty()
        .withMessage('El precio del producto no puede ir vacío')
        .custom((value) => value > 0)
        .withMessage('Precio no válido'),

    createProduct
);

router.put('/', (req, res) => {
    res.json('Desde PUT');
});

router.patch('/', (req, res) => {
    res.json('Desde PATCH');
});

router.delete('/', (req, res) => {
    res.json('Desde DELETE');
});

export default router;
