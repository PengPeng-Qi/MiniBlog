import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="dark:bg-neutral-900 text-black dark:text-white">
      <Head>
        <title>碰碰漆的博客</title>
        <meta
          name="description"
          content="Blog 博客 个人博客 PengPengQ 碰碰漆 漆鹏的博客 碰碰漆的博客"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="table:w-headerWidth mx-auto py-20  table:py-40 sm:py-24 h-367 sm:h-407 table:h-560 desktop:h-660">
        <h1 className="table:text-6xl sm:text-4.5xl text-3xl mb-9 text-center font-bold tracking-wide font-headFont">
          Hi, I’m PengPengQ!
        </h1>
        <article className="mt-5 table:text-1.1textxl sm:text-lg text-base table:w-590 sm:w-506 phone:w-450 w-380 mx-auto font-sans font-light text-gray-800 dark:text-gray-300">
          <p className="text-center">
            I’m a <strong>web software engineer</strong> from Chengdu, China.
            <br />I currently enjoymy last college days. Writing an excellent
            open source project is mygoal. So, I improve my skills everyday.{" "}
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
