import Stripe from "stripe";

const secret = process.env.STRIPE_SECRET_KEY;

export const stripe = new Stripe(secret, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews",
    version: "^8.193.0",
  },
});
