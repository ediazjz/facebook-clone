import { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from './firebase';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
       setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ))
  }, []);

  console.log(posts);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map(post => (
        <Post 
          key={post.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
          image={post.data.image} />
      ))}
    </div>
  )
}

export default Feed
