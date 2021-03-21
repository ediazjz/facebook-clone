import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log(typeof(dispatch));

  return (
    <div className="bg-gray-150">
      {!user ? <Login /> : (
        <>
          <Header />

          <div className="flex">
            <Sidebar />
            
            <Feed />

            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
