import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { RichText } from "prismic-dom";
import { GetPrismicClient } from "../../../services/prismic";
import Head from "next/head";
import styles from "../posts.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import Router from "next/router";
import { redirect } from "next/dist/server/api-utils";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updateAt: string;
  };
}

export default function PostPreview({ post }: PostPreviewProps) {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.activeSubscription) {
      if (session?.activeSubscription) {
        Router.push(`/posts/preview/${post.slug}`);
      }
    }
  }, [post.slug, session]);

  return (
    <>
      <Head>
        <title>{post.slug} | Ig.news</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.posts}>
          <h1>{post.title}</h1>
          <time>{post.updateAt}</time>
          <div
            className={`${styles.content} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className={styles.continueReading}>
            Wanna Continue readgin?
            <Link href="/">
              <a>
                Subscribe now <span>🤗</span>
              </a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const prismic = GetPrismicClient();

  const response = await prismic.getByUID("teste", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
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
