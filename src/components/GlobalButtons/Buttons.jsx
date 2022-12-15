import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Global.module.css'

function Buttons() {
  return (
    <div className={styles.globalButtons}>
      <Link to={"delet"}>
        <button>Deletar</button>
      </Link>
      <Link to={"get"}>
        <button>Adicionar</button>
      </Link>
      <Link to={"put"}>
        <button>Atualizar</button>
      </Link>
    </div>
  )
}

export default Buttons
