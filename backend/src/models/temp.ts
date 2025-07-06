/* const mongoose = require('mongoose');
const Joi = require('joi');

// Подключите вашу модель
const YourModel = mongoose.model('YourModel');

async function checkIdAndValidate(id) {
  try {
    const document = await YourModel.findById(id);
    if (!document) {
      throw new Error('ID не найден в базе данных');
    }

    // Теперь вы можете провести валидацию с помощью Joi
    const schema = Joi.object({
      // ваша схема валидации
    });

    const result = schema.validate(document);
    if (result.error) {
      console.error('Валидация failed:', result.error);
    } else {
      console.log('Валидация прошла успешно');
    }
  } catch (error) {
    console.error(error.message);
  }
} */

/*  const bodyText=JSON.stringify({
     description: "Будет стоять над душой и не давать прокрастинировать.",
     image: {
         fileName: "/images/Asterisk_2.png",
         originalName: "Asterisk_2.png"
     },
     title: "HEX-леденец",
     category: "софт-скил",
     price: 100
  });

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/product', false);
  xhr.setRequestHeader('content-type','application/json');
xhr.send(bodyText); */

/* const bodyParams=JSON.stringify({
    "address": "ололооло",
    "payment": "online",
    "phone": "+7 (333) 333 38 88",
    "total": 2200,
    "email": "kirivn@yandex.ru",
    "items": [
        "68602627cf25ee05293e9f39",
        "68602627cf25ee05293e9f3a"
    ]
})
const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/order', false);
  xhr.setRequestHeader('content-type','application/json');
xhr.send(bodyParams); */

// "68602627cf25ee05293e9f3a"
// null   6869657a415e27673233bdc6
