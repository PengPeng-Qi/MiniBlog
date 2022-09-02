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
  background-color: ${props => props.theme.card.backgroundColor};
`

const Title = styled.div`
  &:hover {
    color: rgb(234 88 12);
  }

  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.75rem;
`

const P = styled.p`
  font-size: 1rem;
  line-height: 1.725rem;
  font-weight: 400;
  cursor: pointer;
`

const Notice = styled(Title)`
  font-size: 1.125rem;
  font-weight: 500;
`

const layout = (props) => {
  const {id, data, title, description} = props.PostsData;
  return(
    <Link href={`/write/posts/${id}`}>
      <Card>
        <Article>
          <Title>{title}</Title>
          <P>{description}</P>
          <Notice>Read More</Notice>
        </Article>
      </Card>
    </Link>
  )
}

export default layout;