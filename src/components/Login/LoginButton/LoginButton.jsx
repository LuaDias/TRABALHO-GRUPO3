import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Button.module.css'

function LoginButton() {
  return (
    <div>
        <Link to={"painel"} className={styles.loginbtn}>
          <button>login</button>
        </Link>
    </div>
  )
}

export default LoginButton