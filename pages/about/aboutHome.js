import Head from "next/head";
import Header from "../../components/header";

export default function Home() {
  return (
    <div className="dark:bg-neutral-900 text-black dark:text-white">
      <Head>
        <title>碰碰漆的博客</title>
        <meta
          name="description"
          content="Blog 博客 个人博客 PengPengQ 碰碰漆"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="table:w-headerWidth mx-auto py-20  table:py-40 sm:py-24 h-367 sm:h-407 table:h-560 desktop:h-660">
        <div>About Me Page</div>
      </main>

      <footer></footer>
    </div>
  );
}
