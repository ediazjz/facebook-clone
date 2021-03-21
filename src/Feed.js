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
    <div className="feed w-full lg:w-9/12 xl:w-7/12 pb-4 md:pb-6 px-4 md:px-28 lg:px-16 flex flex-col items-center justify-center">
      <StoryReel className="order-2 lg:order-1" />
      <MessageSender className="order-1 lg:order-2" />

      <div className="w-full flex flex-col order-3">
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
