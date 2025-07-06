import { Request, Response, NextFunction } from 'express';
import { ObjectId } from 'mongodb';
import { faker } from '@faker-js/faker';
import Product from '../models/product';
import BadRequestError from '../errors/bab-request-error';

interface IRequestData {
  total: any;
  items: string[];
}

const createOrder = (req:Request, res:Response, next:NextFunction) => {
  const data:IRequestData = req.body;
  const itemsId = data.items.map((item) => new ObjectId(item));

  return Product.find({ _id: itemsId })
    .then((items) => {
      // если все товары из заказа есть в БД
      if (items.length === itemsId.length) {
        // проверяем цену каждого товара. total>0, но какой то товар в заказе может быть бесценным
        const existingPrices = items.every((item) => {
          const { price } = item;
          return price && !Number.isNaN(price);
        });

        if (existingPrices) {
          const uniqueId = faker.string.uuid();
          return res.status(200).send({ id: uniqueId, total: data.total });
        }
      }
      return next(new BadRequestError('Ошибка валидации данных при создании заказа'));
    })
    .catch((error) => {
      next(error);
    });
};

export default createOrder;
