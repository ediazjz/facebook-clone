import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post 
        profilePic="https://i.pravatar.cc/300"
        username="Edgar Díaz"
        timestamp="A few seconds ago"
        message="Hello world!" />
    </div>
  )
}

export default Feed
