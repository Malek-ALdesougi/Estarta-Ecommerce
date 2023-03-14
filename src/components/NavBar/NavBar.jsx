//styles
import styles from './style.module.css';
//router dom
import { useNavigate, Link } from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
// action
import { logout } from '../../redux/authReducer/actions';
//icons
import { FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';

function NavBar() {
  const { isAuth, loading, user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function handleLogout() {
    dispatch(logout());
  }

  function handleOpenIcon(){
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to={'/'}>Estarta E-Commerce</Link>
      </div>

      <div className="button">
        {isAuth ? (
          <div className={styles.userOptionsContainer}>
            <FaUserAlt onClick={handleOpenIcon} className={styles.icon} color="orange" size={20} />
            {isOpen ? 
            <div className={styles.optionsDiv}>
              <p>{user.email}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
            : ''}
          </div>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
