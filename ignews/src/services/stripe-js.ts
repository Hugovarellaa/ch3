import { loadStripe } from "@stripe/stripe-js";

const chaveSecreta = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

export async function getStripeJs() {
  const stripeJs = await loadStripe(chaveSecreta);
  return stripeJs;
}
