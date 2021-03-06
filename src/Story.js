import { Avatar } from '@material-ui/core';

const Story = ({ image, profileSrc, title, avatarClass }) => {
  return (
    // h-48 and w-28 for desktop
    <div className="story h-40 md:h-44 lg:h-48 w-24 md:w-28 mr-3 flex-shrink-0 relative bg-center bg-no-repeat rounded-xl shadow-md whitespace-normal cursor-pointer" style={{backgroundImage: `url(${image})`}}>
      <Avatar className={`story__avatar absolute top-1.5 md:top-2 lg:top-3 left-1.5 md:left-2 lg:left-3 border-4 border-brand ${avatarClass}`} src={profileSrc} />
      <span className="p-1.5 md:p-2 lg:p-3 absolute bottom-0 text-white font-medium">{title}</span>
    </div>
  )
}

export default Story
