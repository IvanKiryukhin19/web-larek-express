import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/product';

const router = Router();
export const routerGetProducts = router.get('/product', getProducts);

export const routerCreateProduct = router.post('/product', createProduct);
