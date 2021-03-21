import Story from './Story';

const StoryReel = ({ className }) => {
  return (
    <div className={`storyReel w-screen md:w-full mt-4 pb-4 pl-4 md:pl-0 flex flex-nowrap whitespace-nowrap overflow-auto ${className}`}>
      <Story
        image="https://picsum.photos/id/256/200/400"
        profileSrc="https://i.pravatar.cc/300?img=68"
        title="Lore Ipsum Hernandez"
        avatarClass="seen" />
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
      <Story
        image="https://picsum.photos/id/197/200/400"
        profileSrc="https://i.pravatar.cc/300?img=17"
        title="Lore Ipsum López" />
      <Story
        image="https://picsum.photos/id/101/200/400"
        profileSrc="https://i.pravatar.cc/300?img=60"
        title="Lore Ipsum López" />
    </div>
  )
}

export default StoryReel
