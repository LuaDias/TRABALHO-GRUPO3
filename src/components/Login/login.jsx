import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';
import LoginButton from './LoginButton/LoginButton';

const Login=() =>{

let [lista, setLista] = useState([]);

useEffect(() => {
  let url = 'https://localhost:3000';

  const getPosts = async() => {
    const {data: res} = await axios.get(url);
    setLista(res)
  }
}, [])

   return(
     <div className={styles.loginTeste}>
      <LoginButton/>
     </div>
   )
}

export default Login;