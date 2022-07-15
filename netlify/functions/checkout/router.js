const express = require('express');
const stripe = require('./stripe');
const checkoutSchema = require('./schema');

const checkoutRouter = express.Router();

checkoutRouter.get('/:sessionId', async (req, res) => {
  const { sessionId } = req.params;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    res.send({ data: { session }, error: '' });
  } catch {
    res.send({ data: {}, error: 'An error occurred while fetching the session information.' });
  }
});

checkoutRouter.post('/', async (req, res) => {
  const { error } = checkoutSchema.validate(req.body, {
    convert: false,
    allowUnknown: false,
    errors: { wrap: { label: '' } }
  });

  if (error) {
    res.send({ data: {}, error: error.message });
    return;
  }
  
  const website_url = 'http://localhost:8888'
  const success_url = website_url + '/charities?id={CHECKOUT_SESSION_ID}`'
  const cancel_url = website_url + '/charities?error=true'

  try {
    const { url } = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: Math.round(req.body.amount * 100),
          name: 'Donation',
          currency: 'CAD',
          quantity: 1,
          images: ["https://www.softwareforlove.com/images/homepage.gif"],
        },
      ],
      mode: 'payment',
      success_url: success_url,
      cancel_url: cancel_url,
    });

    res.send({ data: { url }, error: '' });
  } catch (e) {
    res.send({ data: {}, error: 'An error occurred while creating a checkout page.' });
  }
});

module.exports = checkoutRouter;