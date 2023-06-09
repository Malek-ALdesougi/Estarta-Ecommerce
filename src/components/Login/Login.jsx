import { useState } from 'react';
import styles from './style.module.css';

//redux
import { useDispatch, useSelector } from 'react-redux';

//action
import { HandleLogin } from '../../redux/authReducer/actions';

//router dom
import { Navigate, useNavigate } from 'react-router-dom';

//spinnner
import Spinner from '../Spinner/Spinner';

function Login() {
  const { isAuth, loading } = useSelector((state) => state.authReducer);
  const [userEmail, setUserEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function login() {
    dispatch(HandleLogin(userEmail)).then((response) => {
      console.log('returning response to login page :' + response);
      if (response) {
        console.log('log after login');
        navigate('/', {replace: true})
      }
    });
    
  }
  if(loading) return <Spinner />

  return (
    <div className={styles.loginContainer}>
      <div>
        <input
          onChange={(event) => setUserEmail(event.target.value)}
          className={styles.input}
          type={'email'}
          placeholder={'Email'}
        ></input>
      </div>

      <div>
        <button disabled={isAuth} onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
