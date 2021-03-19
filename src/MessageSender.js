import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

const MessageSender = () => {
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
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}?`} />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Share an image via URL" />
          <button onClick={handleSubmit} type="submit">
            Send message!
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red"}} />
          <span>Live Video</span>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green"}} />
          <span>Live Video</span>
        </div>

        <div className="messageSender__option">
          <MoodIcon style={{ color: "orange"}} />
          <span>Live Video</span>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
