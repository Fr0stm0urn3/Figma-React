import { selectAllUsers } from "../features/users/usersSlice"
import { useSelector } from "react-redux"

const Author = ({ userId }) => {
  const users = useSelector(selectAllUsers)

  const author = users.find((user) => user.id === userId)

  return <span>by &nbsp; {author ? author.name : "Unknown author"}</span>
}

export default Author
