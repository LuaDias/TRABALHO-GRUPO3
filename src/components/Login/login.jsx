import styles from './Login.module.css';
import LoginButton from './LoginButton/LoginButton';
import background from '../../assets/img/piscinaLogin.jpg'

function Login() {

  return (
  
    <div className={styles.loginTeste}  style={{ backgroundImage: `url(${background})`,height:"1094px" }}>
      <form action="">
        <h1>Login</h1>

        <label>Usuáro/Email</label>
        <input type="email" />
        <label>Senha</label>
        <input type="password" />

        <LoginButton />

      </form>
    </div>
  );
}

export default Login;
