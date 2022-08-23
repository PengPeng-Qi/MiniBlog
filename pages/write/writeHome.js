import Head from "next/head";
import Header from "../../components/header";

export default function Home() {
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
        <div className="text-center">Write Pages</div>
      </main>

      <footer></footer>
    </div>
  );
}
