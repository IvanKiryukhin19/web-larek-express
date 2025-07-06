import { Request, Response, NextFunction } from 'express';
import NotFoundError from '../errors/not-found-error';

const checkRoutes = (req:Request, res:Response, next:NextFunction) => {
  next(new NotFoundError('Маршрут не найден'));
};

export default checkRoutes;
