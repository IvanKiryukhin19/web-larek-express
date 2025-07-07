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

export const createProduct = (req:Request, res:Response, next:NextFunction) => Product.create(req.body)
  .then((product) => {
    res.status(201).send({ id: product._id });
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
