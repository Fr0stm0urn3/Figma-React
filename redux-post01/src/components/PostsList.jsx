import { useSelector } from "react-redux"
import { selectAllPosts } from "../features/posts/postsSlice"
import Author from "./Author"
import TimeAgo from "./TimeAgo"

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const postContent = posts.map((post) => (
    <article key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.content.substring(0, 75)}</p>
      <div className="postCredit">
        <Author userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </div>
    </article>
  ))

  return (
    <section>
      <h3>Posts:</h3>
      {postContent}
    </section>
  )
}

export default PostsList
