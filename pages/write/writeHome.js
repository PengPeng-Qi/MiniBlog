import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-400 dark:bg-zinc-900 text-black dark:text-white">
      <Head>
        <title>碰碰漆的博客</title>
        <meta
          name="description"
          content="Blog 博客 个人博客 PengPengQ 碰碰漆"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex content-center justify-between table:w-headerWidth mx-auto py-3 text-base table:text-lg h-headerHeight">
        <div className="hover:scale-110 hover:duration-200 duration-200 hover:ease-linear ease-linear">
          <Link href="/">
            <Image
              src="/images/index.png"
              height={35}
              width={35}
              alt="Home Image"
              layout="fixed"
            />
          </Link>
        </div>
        <nav className="p-1">
          <Link href="/write/writeHome">
            <a className="px-2 hover:underline underline-offset-4">Writing</a>
          </Link>
          <Link href="/about/aboutHome">
            <a className="px-2 hover:underline underline-offset-4">About</a>
          </Link>{" "}
        </nav>
      </header>

      <main className="table:w-headerWidth mx-auto py-20  table:py-40 sm:py-24 h-367 sm:h-407 table:h-560 desktop:h-660">
        <div>Write Pages</div>
      </main>

      <footer></footer>
    </div>
  );
}
