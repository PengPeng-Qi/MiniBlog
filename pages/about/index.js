import Head from "next/head";
import styled from "styled-components";
import Header from "../../components/header";

const Main = styled.main`
  @media (min-width: 640px) {
    height: 407px;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @media (min-width: 976px) {
    width: 976px;
    height: 560px;
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  @media (min-width: 1280px) {
    height: 660px;
  }

  height: 367px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

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

      <Main>
        <div className="text-center">About Me Page</div>
      </Main>

      <footer></footer>
    </div>
  );
}
