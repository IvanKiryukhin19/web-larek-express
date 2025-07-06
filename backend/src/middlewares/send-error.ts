import { Request, Response, NextFunction } from 'express';
import BadRequestError from '../errors/bab-request-error';
import ConflictError from '../errors/conflict-error';
import NotFoundError from '../errors/not-found-error';

const sendError = (err:any, req:Request, res:Response, next:NextFunction) => {
  if (err instanceof BadRequestError) {
    return res.status(err.statusCode).send({ message: err.message });
  }

  if (err instanceof ConflictError) {
    return res.status(err.statusCode).send({ message: err.message });
  }

  if (err instanceof NotFoundError) {
    return res.status(err.statusCode).send({ message: err.message });
  }

  return res.status(500).send({ message: 'Ops, somethings wrong' });
};

export default sendError;
