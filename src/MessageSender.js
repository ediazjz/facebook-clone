import { useState } from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

const MessageSender = ({ className }) => {
  const [{ user }, dispatch] = useStateValue();
  console.log(typeof(dispatch));

  const [form, setForm] = useState({
    message: '',
    image: ''
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

    db.collection('posts').add({
      profilePic: user.photoURL,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: form.message,
      image: form.image
    });

    setForm({
      message: '',
      image: ''
    })
  };
  
  return (
    <div className={`messageSender mt-4 lg:mt-0 lg:mb-3 pt-3 pb-2.5 px-4 w-full flex flex-col bg-white rounded-2xl shadow ${className}`}>
      <div className="messageSender__top pb-4 flex items-center border-b border-gray-300">
        <Avatar src={user.photoURL} />
        <form className="h-full w-full ml-3 flex flex-wrap space-y-2 md:space-y-0 md:space-x-2">
          <input
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            // px-5 for desktop
            // mr-3 for desktop
            className="messageSender__input w-full md:w-max md:flex-grow py-1 md:py-1.5 px-3.5 md:px-4 bg-gray-input border-none rounded-full"
            placeholder={`What's on your mind${window.screen.width < 1024 ? '?' : ` , ${user.displayName}?`}`} />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-2/3 md:w-max lg:w-4/12 xl:w-5/12 py-1 md:py-1.5 px-3.5 md:px-4 flex-grow md:flex-grow-0 bg-gray-input border-none rounded-full"
            placeholder="Share image via URL" />
          <button className="w-max ml-1.5 py-1 px-5 md:hidden bg-brand text-white font-semibold border-none rounded-full" onClick={handleSubmit} type="submit">
            Send
          </button>
        </form>
      </div>

      <div className="messageSender__bottom pt-2 flex">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red"}} />
          <span>Live Video</span>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green"}} />
          <span>Photo/Video</span>
        </div>

        <div className="messageSender__option">
          <MoodIcon style={{ color: "orange"}} />
          <span>Feeling/Activity</span>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
