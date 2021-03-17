import { Avatar } from '@material-ui/core';
import './Post.css';

const Post = ({ profilePic, username, timestamp, message, image }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} />
        <div className="post__topInfo">
          <span className="post__username">{username}</span>
          <span className="post__timestamp">{timestamp}</span>
        </div>
      </div>

      <div className="post__content">
        <p>{message}</p>
        {image && <img src={image} alt=""/>}
      </div>
    </div>
  )
}

export default Post

