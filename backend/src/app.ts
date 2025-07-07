import path from 'path';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { errors as errorsJoi } from 'celebrate';
import { routerGetProducts, routerCreateProduct } from './routes/product';
import createOrder from './routes/order';
import checkRoutes from './controllers/routes';
import sendError from './middlewares/send-error';
import { requestLogger, errorLogger } from './middlewares/logger';

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/weblarek');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

app.use(requestLogger);
app.use('/', routerGetProducts);
app.use('/', routerCreateProduct);
app.use('/', createOrder);
app.use(checkRoutes);

app.use(errorLogger);
app.use(errorsJoi(), sendError);

app.listen(3000, () => { console.log('Listening on port 3000'); });
