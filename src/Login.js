import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Login = () => {
  const [state, dispatch] = useStateValue();
  console.log(state);

  const signIn = () => {
    auth.signInWithPopup(provider).then(response => {
      dispatch({
        type: actionTypes.SET_USER,
        user: response.user,
      })    
    }).catch(error => {
      alert(error)
    })
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook logo" />
        <img 
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="Facebook logo text" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In  
      </Button>
    </div>
  )
}

export default Login