const joi = require('joi');

const checkoutSchema = joi.object({
  amount: joi
    .number()
    .positive()
    .required()
});

module.exports = checkoutSchema;