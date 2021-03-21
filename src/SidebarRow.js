import { Avatar } from '@material-ui/core';

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <li className="sidebarRow p-2 flex items-center space-x-4 xl:space-x-5 hover:bg-gray-300 rounded-xl cursor-pointer">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <span className="text-base font-medium" >{title}</span>
    </li>
  )
}

export default SidebarRow

// Same skeleton but without destructuring props
// This is not fancy! D:

// const SidebarRow = props => {
//   return (
//     <div className="sidebarRow">
//       {props.src && <Avatar src={props.src} />}
//       {props.Icon && <props.Icon />}

//       <p>{props.title}</p>
//     </div>
//   )
// }
