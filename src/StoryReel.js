import Story from './Story';
import './StoryReel.css';

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/200/400"
        profileSrc="https://i.pravatar.cc/300"
        title="Lore Ipsum Hernandez" />
      <Story
        image="https://picsum.photos/200/400"
        profileSrc="https://i.pravatar.cc/300"
        title="Lore Ipsum García" />
      <Story
        image="https://picsum.photos/200/400"
        profileSrc="https://i.pravatar.cc/300"
        title="Lore Ipsum Martínez" />
      <Story
        image="https://picsum.photos/200/400"
        profileSrc="https://i.pravatar.cc/300"
        title="Lore Ipsum González" />
      <Story
        image="https://picsum.photos/200/400"
        profileSrc="https://i.pravatar.cc/300"
        title="Lore Ipsum López" />
    </div>
  )
}

export default StoryReel
