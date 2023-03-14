//styles
import styles from './style.module.css';
//router dom
import { useNavigate,Link } from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
// action
import { logout } from '../../redux/authReducer/actions';

function NavBar() {

  const { isAuth, loading, user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout(){
    dispatch(logout());
  }

  console.log(isAuth);
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to={'/'}>Estarta E-Commerce</Link>
      </div>

      <div className="button">
        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
