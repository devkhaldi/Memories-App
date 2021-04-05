import { AiOutlineLike } from "react-icons/ai"
import { AiOutlineDelete } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import moment from "moment"

const Post = ({ post }) => {
  return (
    <section className='post'>
      <div className='img-container'>
        <div className='img-container-header'>
          <span className='creator'>{post.creator}</span>
          <BsThreeDots />
        </div>
        <span className='date'>{moment(post.createdAt).fromNow()}</span>
        <img src={post.img} alt='post image' />
      </div>
      <div className='tags'></div>
      <div className='title'>{post.title}</div>
      <div className='description'>{post.description}</div>
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
    </section>
  )
}

export default Post
