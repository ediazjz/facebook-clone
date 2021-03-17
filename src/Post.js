import { Avatar } from '@material-ui/core';
import './Post.css';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

const Post = ({ profilePic, username, timestamp, message, image }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={profilePic} />
        <div className="post__headerInfo">
          <span className="post__username">{username}</span>
          <span className="post__timestamp">{timestamp}</span>
        </div>
      </div>

      <div className="post__content">
        <p>{message}</p>
        {image && <img src={image} alt=""/>}
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <span>Like</span>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <span>Comment</span>
        </div>
        <div className="post__option">
          <ShareOutlinedIcon />
          <span>Share</span>
        </div>
      </div>
    </div>
  )
}

export default Post

