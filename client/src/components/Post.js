import { AiOutlineLike } from "react-icons/ai"
import { AiOutlineDelete } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import moment from "moment"
import "./styles/Post.css"

const Post = ({ post }) => {
  return (
    <section className='post'>
      <div className='post-content'>
        <div className='img-container'>
          <span className='creator'>{post.creator}</span>
          <BsThreeDots className='dots' />
          <span className='date'>{moment(post.createdAt).fromNow()}</span>
          <img src={post.image} alt='post image' />
        </div>
        <div className='tags'>
          {post.tags.map(tag => (
            <span>{tag}</span>
          ))}
        </div>
        <div className='title'>{post.title}</div>
        <div className='description'>{post.message}</div>
        <div className='actions'>
          <button className='like'>
            <AiOutlineLike />
            Like {post.likeCount}
          </button>
          <button className='delete'>
            <AiOutlineDelete />
            Delete
          </button>
        </div>
      </div>
    </section>
  )
}

export default Post
