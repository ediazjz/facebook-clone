import { Button } from '@material-ui/core';
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
    <div className="login h-screen grid place-items-center">
      <div className="login__logo flex flex-col">
        <img
          className="h-36 object-contain" 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook logo" />
        <img
          className="h-48 object-contain"
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="Facebook logo text" />
      </div>
      <Button className="login__button" type="submit" onClick={signIn}>
        Sign In  
      </Button>
    </div>
  )
}

export default Login
