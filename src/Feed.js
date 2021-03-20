import { useEffect, useState } from 'react';
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
    // p-8 for desktop
    <div className="feed w-full pb-4 px-4 flex flex-col items-center justify-center">
      <StoryReel className="order-2" />
      <MessageSender className="order-1" />

      <div className="flex flex-col order-3">
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
    </div>
  )
}

export default Feed
