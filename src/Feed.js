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
        profilePic="https://i.pravatar.cc/300?img=68"
        username="Lore Ipsum Hernandez"
        timestamp="A few seconds ago"
        message="Look at my cat!"
        image="https://picsum.photos/id/40/600/300" />
      <Post 
        profilePic="https://i.pravatar.cc/300?img=11"
        username="Lore Ipsum López"
        timestamp="An hour ago"
        message="Just hustle!"
        image="https://picsum.photos/id/4/600/300" />
    </div>
  )
}

export default Feed
