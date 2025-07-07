import { Request, Response, NextFunction } from 'express';

const sendError = (err:any, req:Request, res:Response, next:NextFunction) => {
// спасибо за совет, думал как избежать повторений, но не додумался
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? 'Ошибка сервера' : err.message;

  return res.status(statusCode).send({ message });
};

export default sendError;
