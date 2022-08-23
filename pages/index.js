import Head from "next/head";
import Header from "../components/header";

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
          table:w-976
          table:py-40
          table:h-560
          sm:py-24
          sm:h-407
          h-367
          py-20
          mx-auto"
      >
        <h1
          className="
            table:text-6xl
            sm:text-4.5xl
            text-3xl
            mb-9
            text-center
            tracking-wide
            font-headFont"
        >
          Hi, I&#39;m PengPengQ!
        </h1>
        <article
          className="
          dark:text-gray-300
            table:text-1.1xl
            table:w-590
            phone:w-450
            sm:w-506
            sm:text-lg
            text-base
            w-380
            mx-auto
            font-sans
            font-light
          text-gray-800"
        >
          <p className="text-center">
            <strong>web software engineer</strong> from Chengdu,
            China.
            <br />
            Writing an excellent opensource project is mygoal.
            <br />
            So, I improve my skills everyday.
            <br />
            <br />
            If you are interested in me, welcome to follow me.
          </p>
        </article>
      </main>

      <footer></footer>
    </div>
  );
}
