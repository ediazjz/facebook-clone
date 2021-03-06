import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log(typeof(dispatch));

  return (
    <header className="header h-max md:h-14 w-full mt-3 md:mt-0 px-5 flex flex-wrap items-center justify-between sticky top-0 bg-white shadow-md z-50">
      <div className="header__left w-full md:w-max mb-2 md:mb-0 flex items-center space-x-3">
        <img 
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook logo" />
        <label className="header__input flex flex-grow items-center relative bg-gray-input rounded-full">
          <SearchIcon className="absolute top-3 left-3 opacity-50" />
          <input
            className="pt-3 pr-4 pb-2 pl-10 bg-transparent border-none text-base font-extralight"
            type="text"
            placeholder="Search Facebook"/>
        </label>
      </div>

      <nav className="header__middle w-full md:w-max md:flex-grow md:self-end">
        <ul className="flex justify-center">
          <li className="header__option header__option--active">
            <HomeIcon fontSize="large" />
          </li>
          <li className="header__option">
            <FlagIcon fontSize="large" />
          </li>
          <li className="header__option">
            <SubscriptionsIcon fontSize="large" />
          </li>
          <li className="header__option">
            <StorefrontIcon fontSize="large" />
          </li>
          <li className="header__option">
            <SupervisedUserCircleIcon fontSize="large" />
          </li>
        </ul>
      </nav>
      
      <div className="header__right lg:w-max hidden lg:flex items-center">
        <div className="header__info mr-3 hidden xl:flex items-center">
          <Avatar src={user.photoURL} />
          <span className="ml-3">{user.displayName}</span>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </header>
  )
}

export default Header
