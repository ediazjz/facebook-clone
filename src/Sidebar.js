import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log(typeof(dispatch));

  return (
    <div className="sidebar w-3/12 py-4 px-2 hidden lg:block sticky top-14">
      <ul>
       <SidebarRow src={user.photoURL} title={user.displayName}/>
       <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>

       <SidebarRow Icon={FlagIcon} title="Pages"/>
       <SidebarRow Icon={PeopleIcon} title="Friends"/>
       <SidebarRow Icon={ChatIcon} title="Messenger"/>
       <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
       <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
       <SidebarRow Icon={ExpandMoreIcon} title="More..."/>
      </ul>
    </div>
  )
}

export default Sidebar
