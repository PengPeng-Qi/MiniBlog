import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 47.5%;
  }
  @media (min-width: 1024px) {
    width: 450px;
  }

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`

const Article = styled.article`
  padding: 1.25rem;
  border-radius: 0.75rem;
  background-color: rgb(250 250 250);
`

const Title = styled.div`
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
  @media (min-width: 1280px) {
    font-size: 1.25rem;
  }
  &:hover {
    color: rgb(234 88 12);
  }

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.75rem;
  margin-bottom: 0.75rem;
`

const layout = (props) => {
  const {id, date, title} = props.PostsData;
  return(
    <Link href={`/write/posts/${id}`}>
      <Card>
        <Article
          className="
            dark:bg-card-blue
          ">
          <Title>{title}</Title>
          <p>{date}</p>
        </Article>
      </Card>
    </Link>
  )
}

export default layout;