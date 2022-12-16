import styles from './Login.module.css';
import LoginButton from './LoginButton/LoginButton';

const Login = () => {

  return (
    <div className={styles.loginTeste}>
  
      <form action="">
      <h1>Login</h1>

        <label htmlFor="">Usuáro/Email</label>
        <input type="email" />
        <label htmlFor="">Senha</label>
        <input type="password" />
        
        <LoginButton />

      </form>
    </div>
  )
}

export default Login;
