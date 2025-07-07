import { Request, Response, NextFunction } from 'express';
import orderSchema from './order-schema';
import BadRequestError from '../errors/bab-request-error';

const validateOrder = (req:Request, res:Response, next:NextFunction) => {
  const { error } = orderSchema.validate(req.body);
  if (error) {
    next(new BadRequestError('Ошибка валидации данных при создании заказа'));
  } else {
    next();
  }
};

export default validateOrder;
