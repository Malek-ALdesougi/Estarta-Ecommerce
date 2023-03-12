import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const { isAuth, loading, user } = useSelector((state) => state.authReducer);

  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to={'/'}>Estarta E-Commerce</Link>
      </div>

      <div className="button">
        {loading ? (
          'loading...'
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
