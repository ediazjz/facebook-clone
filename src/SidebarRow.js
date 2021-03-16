import { Avatar } from '@material-ui/core'
import './SidebarRow.css'

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
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
