import { Request, Response, NextFunction } from 'express';
import Product from '../models/product';
import ConflictError from '../errors/conflict-error';
import BadRequestError from '../errors/bab-request-error';

export const getProducts = (req:Request, res:Response, next:NextFunction) => Product.find({})
  .then((products) => {
    res.status(200).send({ items: products, total: products.length });
  })
  .catch((error) => {
    next(error);
  });

export const createProduct = (req:Request, res:Response, next:NextFunction) => {
  const data = req.body;
  // если не указана цена или 0 или не число, то по умолчанию null
  if (!data.price || data.price === 0 || Number.isNaN(data.price)) data.price = null;

  return Product.create(data)
    .then((product) => {
      res.status(201).send(product._id);
    })
    .catch((error) => {
      if (error instanceof Error && error.message.includes('E11000')) {
        next(new ConflictError('Ошибка валидации данных при создании товара'));
      } else if (error instanceof Error && error.message.includes('validation failed')) {
        next(new BadRequestError('Ошибка валидации данных при создании товара'));
      } else {
        next(error);
      }
    });
};
