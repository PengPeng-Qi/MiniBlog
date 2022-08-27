import Link from "next/link";

const layout = (props) => {
  const {id, date, title} = props.PostsData;
  return(
    <Link href={`/write/posts/${id}`}>
      <div
        className="
          desktop:w-450
          table:w-420
          table:py-5
          phone:w-full
          py-3
      ">
        <article
          className="
            rounded-xl
          bg-neutral-50
            dark:bg-card-blue
            p-5
          ">
          <div
            className="
            hover:text-orange-600
              desktop:text-xl
              phone:text-lg
              font-semibold
              mb-3"
          >{title}</div>
          <p>{date}</p>
        </article>
      </div>
    </Link>
  )
}

export default layout;