import Image from "next/image";
import Link from "next/link";
import ToggleMode from './toggleMode';

const header = () => {
  return(
      <header className="flex content-center justify-between table:w-headerWidth mx-auto py-3 text-base leading-7.5 table:text-lg h-headerHeight font-sans sm:bg-inherit dark:bg-zinc-900">
        <div className="hover:scale-110 hover:duration-200 duration-200 hover:ease-linear ease-linear relative ml-2">
          <Image
            src="/images/index.png"
            height={35}
            width={35}
            alt="Home Image"
            layout="fixed"
          />
          <Link href="/">
            <div className="w-9 h-9 absolute top-0 z-20"> </div>
          </Link>
        </div>
        <nav className="p-1 flex">
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
          </Link>
          <ToggleMode />
        </nav>
      </header>
  )
}

export default header;