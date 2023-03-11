import styles from './style.module.css';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div>
        <input className={styles.input} type={'email'} placeholder={'Email'}></input>
      </div>

      <div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
