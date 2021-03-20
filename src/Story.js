import { Avatar } from '@material-ui/core';
import './Story.css';

const Story = ({ image, profileSrc, title, avatarClass }) => {
  return (
    // h-48 and w-28 for desktop
    <div className="story h-40 w-24 mr-3 flex-shrink-0 relative bg-center bg-no-repeat rounded-xl whitespace-normal cursor-pointer" style={{backgroundImage: `url(${image})`}}>
      {/* spacing 3 for desktop */}
      <Avatar className={`story__avatar absolute top-1.5 left-1.5 border-4 border-brand ${avatarClass}`} src={profileSrc} />
      <span className="p-1.5 absolute bottom-0 text-white font-medium">{title}</span>
    </div>
  )
}

export default Story
