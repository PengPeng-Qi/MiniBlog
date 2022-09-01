import Head from "next/head";
import Header from "../../components/header";
import Card from "../../components/card";
import { getSortedPostsData } from "../../lib/posts";
import styled from "styled-components";

const WriteDiv = styled.div`
  @media (min-width: 641px) {
    min-height: 407px;
    margin: 0px 1.5rem;
    padding: 4rem 0;
  }
  @media (min-width: 1024px) {
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

const H1 = styled.h1`
  /* 字体发生变化，card组件也类似 */
  @media (min-width: 768px) {
    height: 3rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 1.75rem;
    line-height: 2.5rem;
  }

  height: 2.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 2rem;
  padding: 0px 1.25rem;
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export async function getStaticProps() {
  // get id, data, title item
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>碰碰漆的博客</title>
        <meta
          name="description"
          content="Blog 博客 个人博客 PengPengQ 碰碰漆 漆鹏的博客 碰碰漆的博客"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <WriteDiv>
        <H1>Last Content</H1>
        <Main>
          {allPostsData.map(PostsData => (
            <Card PostsData={PostsData} key={PostsData.id} />
          ))}
        </Main>
      </WriteDiv>

      <footer></footer>
    </div>
  );
}
