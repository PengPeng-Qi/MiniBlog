import Link from "next/link";

const layout = (props) => {
  const {id, date, title} = props.PostsData;
  return(
    <Link href={`/write/posts/${id}`}>
      <div
        className="
          desktop:w-450
      ">
        <p>title: {title}</p>
        <p>date: {date}</p>
      </div>
    </Link>
  )
}

export default layout;