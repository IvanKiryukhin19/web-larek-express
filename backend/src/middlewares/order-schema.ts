import Joi from 'joi';

const orderSchema = Joi.object({
  items: Joi.array().min(1), // массив не пустой
  total: Joi.number().positive().required(), // стоимость заказа больше нуля
  payment: Joi.string().valid('card', 'online').required(), // оплата картой или онлайн
  email: Joi.string().email().required(), // проверка почты
  phone: Joi.string().required(), // проверка заполнения телефона
  address: Joi.string().required(), // проверка заполнения адреса
});

export default orderSchema;
