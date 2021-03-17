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
        message="Hello world!"
        image="https://www.newzealand.com/assets/Tourism-NZ/Christchurch-Canterbury/8bb86abcfd/img-1536307813-4242-957-p-C4D67668-0642-F5C5-BC3A684C8BB1F331-2544003__aWxvdmVrZWxseQo_FocalPointCropWzI0MCw0ODAsNTAsNTMsNzUsImpwZyIsNjUsMi41XQ.jpg" />
      <Post 
        profilePic="https://i.pravatar.cc/300"
        username="Edgar Díaz"
        timestamp="A few seconds ago"
        message="Hello world!"
        image="https://www.newzealand.com/assets/Tourism-NZ/Christchurch-Canterbury/8bb86abcfd/img-1536307813-4242-957-p-C4D67668-0642-F5C5-BC3A684C8BB1F331-2544003__aWxvdmVrZWxseQo_FocalPointCropWzI0MCw0ODAsNTAsNTMsNzUsImpwZyIsNjUsMi41XQ.jpg" />
    </div>
  )
}

export default Feed
