import Story from './Story';
import './StoryReel.css';

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/id/256/200/400"
        profileSrc="https://i.pravatar.cc/300?img=68"
        title="Lore Ipsum Hernandez" />
      <Story
        image="https://picsum.photos/id/128/200/400"
        profileSrc="https://i.pravatar.cc/300?img=32"
        title="Lore Ipsum García" />
      <Story
        image="https://picsum.photos/id/64/200/400"
        profileSrc="https://i.pravatar.cc/300?img=3"
        title="Lore Ipsum Martínez" />
      <Story
        image="https://picsum.photos/id/32/200/400"
        profileSrc="https://i.pravatar.cc/300?img=9"
        title="Lore Ipsum González" />
      <Story
        image="https://picsum.photos/id/16/200/400"
        profileSrc="https://i.pravatar.cc/300?img=11"
        title="Lore Ipsum López" />
    </div>
  )
}

export default StoryReel
