const serverless = require('serverless-http');
const express = require('express');
const checkout = require('./router');

const app = express();

app.use(express.json());

app.use('/.netlify/functions/checkout', checkout);

app.use((req, res) => {
  res.send({ data: {}, error: `${req.method} ${req.path} does not exist.` })
});

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  const result = await handler(event, context);

  return result;
};