import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface homeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: homeProps) {
  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.hero}>
          <span>
            👏<strong>Hey, welcome</strong>
          </span>
          <h1>
            News about <br />
            the <span>React</span> world
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} monthS</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl condig" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JsSzEH6aihmDxYbnis4Pjbe");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};
