import Head from "next/head";
import Header from "../../components/header";
import Card from "../../components/card";
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
      bg-slate-100
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
          desktop:min-h-660
          table:min-h-560
          table:w-976
          table:py-24
          table:mx-auto
          sm:min-h-407
          sm:py-16
          min-h-367
          mx-6
          py-12"
      >
        <h1
          className="
            desktop:px-8
            desktop:text-3xl
            table:px-12
            table:text-2.5xl
            table:h-12
            phone:px-4
            phone:text-2xl
            font-bold
            h-10"
        >
          Last Content
        </h1>
        <main className="flex justify-around flex-wrap">
          {allPostsData.map((PostsData) => (
            <Card PostsData={PostsData} key={PostsData.id} />
          ))}
        </main>
      </main>

      <footer></footer>
    </div>
  );
}
