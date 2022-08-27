import Head from "next/head";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  // get id, data, title item
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div
      className="
      dark:bg-neutral-900
      dark:text-white
      bg-neutral-50
      text-black"
    >
      <Head>
        <title>碰碰漆的博客</title>
        <meta
          name="description"
          content="Blog 博客 个人博客 PengPengQ 碰碰漆 漆鹏的博客 碰碰漆的博客"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main
        className="
          desktop:h-660
          table:h-560
          table:w-976
          table:py-40
          sm:h-407
          sm:py-24
          h-367
          py-20
          mx-auto"
      >
        <div className="flex justify-between">
          {allPostsData.map((PostsData) => (
            <Layout PostsData={PostsData} key={PostsData.id} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
