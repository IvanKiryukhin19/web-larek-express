import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { getProducts, createProduct } from '../controllers/product';
import productSchema from '../middlewares/product-schema';

const router = Router();
export const routerGetProducts = router.get('/product', getProducts);

export const routerCreateProduct = router.post('/product', celebrate({ [Segments.BODY]: productSchema }), createProduct);
