import Head from "next/head";
import Header from "../../../components/header";
import { getAllPostIds, getPostData } from "../../../lib/posts";

export default function Post({ postData }) {
  return (
    <div
      className="
      dark:bg-neutral-900
      dark:text-white
      bg-neutral-50
      text-black"
    >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header />
      <main
        className="
          desktop:h-660
          table:w-976
          table:py-40
          table:h-560
          sm:py-24
          sm:h-407
          h-367
          py-20
          mx-auto"
      >
        <article>
          <h1>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
