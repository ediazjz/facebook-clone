import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';

const Sidebar = () => {
  return (
    <div>
       <SidebarRow Icon={HomeIcon} title="Home"/>
    </div>
  )
}

export default Sidebar
