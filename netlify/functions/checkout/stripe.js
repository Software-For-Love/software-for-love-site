const STRIPE_KEY = process.env.STRIPE_KEY;

if (!STRIPE_KEY) {
  throw new Error("Stripe key is not initialized.")
}

const stripe = require('stripe')(STRIPE_KEY);

module.exports = stripe;