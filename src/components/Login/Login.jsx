import { useState } from 'react';
import styles from './style.module.css';

//redux
import { useDispatch, useSelector } from 'react-redux';

//action
import { HandleLogin } from '../../redux/authReducer/actions';

//router dom
import { useNavigate } from 'react-router-dom';


function Login() {
  const { isAuth, loading} = useSelector((state) => state.authReducer);
  const [userEmail, setUserEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function login() {
    dispatch(HandleLogin(userEmail));
    navigate('/');
  }

  return loading ? (
    <CircleLoader />
  ) : (
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
        <button disabled={isAuth} onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
