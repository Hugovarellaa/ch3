import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import styles from "./post.module.scss";

interface Post {
  post: {
    slug: string;
    content: string;
    title: string;
    updateAt: string;
  };
}

export default function Post({ post }: Post) {
  return (
    <>
      <Head>
        <title>{`${post.title}`} | Ig.news</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updateAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const { slug } = params;

  console.log(session);

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: "/",// redireciona para a preview e nao para a home
        permanent: false,
      },
    };
  }

  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID("teste", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updateAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };
  return {
    props: {
      post,
    },
  };
};
