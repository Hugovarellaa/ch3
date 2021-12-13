import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getStripeJs } from "../../../stripe-js";
import { api } from "../../services/api";
import style from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
      router.push("/posts");
      return;
    }

    try {
      const response = await api.post("subscribe");
      const { sessionId } = response.data;
      const stripe = await getStripeJs();
      stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.log({ err: err.message });
    }
  }

  return (
    <button
      type="button"
      className={style.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
