import Head from "next/head";
import styled from "styled-components";

const Main = styled.main`
  @media (min-width: 641px) {
    min-height: 407px;
    margin: 0px 1.5rem;
    padding: 4rem 0;
  }
  @media (min-width: 976px) {
    width: 976px;
    min-height: 560px;
    margin: 0px auto;
    padding: 6rem 0;
  }
  @media (min-width: 1280px) {
    min-height: 660px;
  }

  min-height: 367px;
  margin: 0 1rem;
  padding: 2rem 0;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>碰碰漆的博客</title>
        <meta
          name="description"
          content="Blog 博客 个人博客 PengPengQ 碰碰漆 漆鹏的博客 碰碰漆的博客"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>About Me Page</Main>
    </>
  );
}
