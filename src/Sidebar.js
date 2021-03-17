import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Sidebar = () => {
  return (
    <div className="sidebar">
       <SidebarRow src="https://i.pravatar.cc/300" title="Edgar Díaz"/>
       <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>

       <SidebarRow Icon={FlagIcon} title="Pages"/>
       <SidebarRow Icon={PeopleIcon} title="Friends"/>
       <SidebarRow Icon={ChatIcon} title="Messenger"/>
       <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
       <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
       <SidebarRow Icon={ExpandMoreIcon} title="More..."/>

    </div>
  )
}

export default Sidebar
