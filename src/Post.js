import { Avatar } from '@material-ui/core';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

const Post = ({ profilePic, username, timestamp, message, image }) => {
  return (
    <div className="post w-full mt-4 bg-white rounded-2xl shadow">
      <div className="post__header mb-3 pt-3 px-4 flex items-center relative">
        <Avatar className="mr-2" src={profilePic} />
        <div className="post__headerInfo flex flex-col">
          <span className="post__username mb-1 font-medium">{username}</span>
          {/* sm for desktop */}
          <span className="post__timestamp text-xs text-gray-500">{new Date(timestamp?.toDate()).toUTCString()}</span>
        </div>
      </div>

      <div className="post__content">
        {/* pb-4 for desktop */}
        <p className="pt-1 pb-2 md:pb-3 px-4">{message}</p>
        {image && <img className="w-full" src={image} alt=""/>}
      </div>

      <div className={`post__options h-11 mb-1 mx-4 flex justify-evenly text-gray-500 ${!image && 'border-t'} border-gray-300`}>
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

