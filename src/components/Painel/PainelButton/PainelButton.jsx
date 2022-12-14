import React from 'react'
import { Link } from 'react-router-dom';
import styles from './PainelBtn.module.css'

function PainelButton() {
  return (
    <div className={styles.painelBtn}>
        <Link to={"/clientes"}>
          <button>Clientes</button>
        </Link>
        <Link to={"/funcionarios"}><button>Funcionarios</button></Link>
        <Link to={"/quartos"}><button>Quartos</button></Link>
    </div>
  )
}

export default PainelButton