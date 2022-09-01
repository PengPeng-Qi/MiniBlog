import Head from "next/head";
import styled from "styled-components";
import Header from "../components/header";

const Main = styled.main`
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 367px;
    padding: 6rem 0;
  }
  @media (min-width: 1024px) {
    width: 976px;
    min-height: 560px;
    padding: 10rem 0;
  }
  @media (min-width: 1280px) {
    min-height: 660px;
  }

  margin: 0px auto;
`;

const H1 = styled.h1`
  @media (min-width: 640px) {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
    line-height: 2.75rem;
    margin-bottom: 2.25rem;
  }

  font-size: 1.75rem;
  font-family: Crimson Pro, serif;
  line-height: 2.25rem;
  text-align: center;
  letter-spacing: 0.025em;
  margin-bottom: 1.25rem;
`;

const Article = styled.article`
  @media (min-width: 641px) {
    width: 506px;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  @media (min-width: 1024px) {
    width: 590px;
    font-size: 21px;
    line-height: 31.496px;
  }

  width: 100%;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(31 41 55);
  margin: 0px auto;
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
        <H1>Hi, I&#39;m PengPengQ!</H1>
        <Article className="dark:text-gray-300">
          <p className="text-center">
            <strong>web software engineer</strong> from Chengdu, China.
            <br />
            Writing an excellent opensource project is mygoal.
            <br />
            So, I improve my skills everyday.
            <br />
            <br />
            If you are interested in me, welcome to follow me.
          </p>
        </Article>
      </Main>

      <footer></footer>
    </div>
  );
}
