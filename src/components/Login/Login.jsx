import { useState } from 'react';
import styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { HandleLogin } from '../../redux/authReducer/actions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Login() {
  const { isAuth, loading, user } = useSelector((state) => state.authReducer);
  const [userEmail, setUserEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function login() {
    dispatch(HandleLogin(userEmail));
    navigate('/');
  }

  return loading ? (
    'loading ...'
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
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
