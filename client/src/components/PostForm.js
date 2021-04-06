import ReactDom from "react-dom"
import "./styles/PostForm.css"

const PostForm = ({ post }) => {
  return ReactDom.createPortal(
    <div className='modal fade' id='postModal' tabindex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <h5 className='modal-title'>
            {post ? `Edit ${post.title}` : "Create new post"}
          </h5>
          <div className='modal-body'>
            {/* post form */}
            {/* prettier-ignore */}
            <form>
                <input type="text" className='form-control' placeholder='Creator'/>
                <input type="text" className='form-control' placeholder='Title'/>
                <textarea cols="30" className='form-control' rows="10" placeholder='Message'></textarea>
                <input type="text" className='form-control' placeholder='Tags ( Coms separated)'/>
                <input type="file"/>
                <input type="submit"/>
                <input type="clear"/>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("createPost")
  )
}

export default PostForm
