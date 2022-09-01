import Head from "next/head";
import styled from "styled-components";
import Header from "../../../components/header";
import { getAllPostIds, getPostData } from "../../../lib/posts";

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

export default function Post({ postData }) {
  return (
    <div
      className="
      dark:bg-neutral-900
      dark:text-white
      bg-neutral-50
      text-black"
    >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header />
      <Main>
        <article>
          <h1>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
