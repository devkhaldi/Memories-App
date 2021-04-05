import ReactDom from "react-dom"

const PostForm = ({ post }) => {
  return ReactDom.createPortal(
    <div className='modal fade' id='postModal' tabindex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>
              {post ? `Edit ${post.title}` : "Create new post"}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body'></div>
        </div>
      </div>
    </div>,
    document.getElementById("createPost")
  )
}

export default PostForm
