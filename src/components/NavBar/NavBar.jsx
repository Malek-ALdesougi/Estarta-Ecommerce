//styles
import styles from './style.module.css';
//router dom
import { useNavigate, Link, NavLink } from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
// action
import { logout } from '../../redux/authReducer/actions';
//icons
import { FaUserAlt } from 'react-icons/fa';
import { IoCart } from "react-icons/io5";
// Hooks
import { useState } from 'react';

function NavBar() {
  const { isAuth, user } = useSelector((state) => state.authReducer);
  const {cartProducts} = useSelector(state => state.cartReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function handleLogout() {
    dispatch(logout());
  }

  function handleOpenIcon() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to={'/'}>Estarta E-Commerce</Link>
      </div>

      <div className="button">
        {isAuth ? (
          <div className={styles.userOptionsContainer}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
            <Link to={'/cart'}>
              <IoCart className={styles.cartIcon} size={25} color={'darkorange'}/>
              <span className={styles.iconNumber}>{cartProducts.length}</span>
              </Link>
            <FaUserAlt
              onClick={handleOpenIcon}
              className={styles.icon}
              color="orange"
              size={20}
            />
            {isOpen ? (
              <div className={styles.optionsDiv}>
                <p>{user.email}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              ''
            )}
          </div>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
