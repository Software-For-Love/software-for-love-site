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

  try {
    const { url } = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: Math.round(req.body.amount * 100),
          name: 'Donation',
          currency: 'CAD',
          quantity: 1,
          images: ["https://www.softwareforlove.com/images/homepage.gif"],
          description: "This is a description"
        },
      ],
      mode: 'payment',
      success_url: `https://www.softwareforlove.com/charities?id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://www.softwareforlove.com/charities?error=true`,
    });

    res.send({ data: { url }, error: '' });
  } catch (e) {
    res.send({ data: {}, error: 'An error occurred while creating a checkout page.' });
  }
});

module.exports = checkoutRouter;