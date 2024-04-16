import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { selectAllUsers } from "../features/users/usersSlice"
import { postAdded } from "../features/posts/postsSlice"

const AddPostForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserId] = useState("")
  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)

  const canSave = [title, content, userId].every(Boolean)
  const author = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ))

  const handleAddPostClick = () => {
    if (canSave) {
      dispatch(postAdded(title, content, userId))

      setTitle("")
      setUserId("")
      setContent("")
    }
  }

  return (
    <section>
      <h2>Add Post</h2>
      <form>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {author}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" disabled={!canSave} onClick={handleAddPostClick}>
          Add Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
