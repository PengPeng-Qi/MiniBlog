import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-400 dark:bg-neutral-900 text-black dark:text-white">
      <Head>
        <title>碰碰漆的博客</title>
        <meta
          name="description"
          content="Blog 博客 个人博客 PengPengQ 碰碰漆"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex content-center justify-between table:w-headerWidth mx-auto py-3 text-base table:text-lg h-headerHeight font-sans sm:bg-inherit dark:bg-zinc-900">
        <div className="hover:scale-110 hover:duration-200 duration-200 hover:ease-linear ease-linear">
          <Image
            src="/images/index.png"
            height={35}
            width={35}
            alt="Home Image"
            layout="fixed"
          />
        </div>
        <nav className="p-1">
          <Link href="/">
            <a className="px-2 mr-4 hover:underline underline-offset-4">Home</a>
          </Link>
          <Link href="/write/writeHome">
            <a className="px-2 mr-4 hover:underline underline-offset-4">
              Writing
            </a>
          </Link>
          <Link href="/about/aboutHome">
            <a className="px-2 mr-4 hover:underline underline-offset-4">
              About
            </a>
          </Link>{" "}
        </nav>
      </header>

      <main className="table:w-headerWidth mx-auto py-20  table:py-40 sm:py-24 h-367 sm:h-407 table:h-560 desktop:h-660">
        <h1 className="table:text-6xl sm:text-4.5xl text-3xl mb-9 text-center font-bold">
          Hi, I’m PengPengQ!
        </h1>
        <article className="mt-5 table:text-1.1textxl sm:text-lg text-base table:w-590 sm:w-506 phone:w-450 w-380 mx-auto font-sans font-light text-gray-300">
          <p className="text-center">
            I’m a web <strong>software engineer</strong> from Chengdu, China.
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
