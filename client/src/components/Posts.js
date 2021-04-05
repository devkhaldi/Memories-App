import postImage from "../images/solo-skydiving.jpg"
import Post from "./Post"

const Posts = () => {
  return (
    <section className='posts'>
      {posts.map(post => (
        <Post post={post} />
      ))}
    </section>
  )
}

const posts = [
  {
    id: 1,
    creator: "EL khaldi",
    image: postImage,
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum placeat nisi laborum nobis et labore deserunt accusamus, libero temporibus perspiciatis.",
    tags: ["skydiving", "fun", "scared"],
    likeCount: 20,
    createdAt: "2012-11-04T14:51:06.157Z",
  },
  {
    id: 2,
    creator: "EL khaldi",
    image: postImage,
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum placeat nisi laborum nobis et labore deserunt accusamus, libero temporibus perspiciatis.",
    tags: ["skydiving", "fun", "scared"],
    likeCount: 20,
    createdAt: "2012-11-04T14:51:06.157Z",
  },
  {
    id: 3,
    creator: "EL khaldi",
    image: postImage,
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum placeat nisi laborum nobis et labore deserunt accusamus, libero temporibus perspiciatis.",
    tags: ["skydiving", "fun", "scared"],
    likeCount: 20,
    createdAt: "2012-11-04T14:51:06.157Z",
  },
  {
    id: 4,
    creator: "EL khaldi",
    image: postImage,
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum placeat nisi laborum nobis et labore deserunt accusamus, libero temporibus perspiciatis.",
    tags: ["skydiving", "fun", "scared"],
    likeCount: 20,
    createdAt: "2012-11-04T14:51:06.157Z",
  },
]

export default Posts
