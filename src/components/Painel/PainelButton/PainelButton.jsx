import React from 'react'
import { Link } from 'react-router-dom';
import styles from './PainelBtn.module.css'

function PainelButton() {
  return (
    <div className={styles.painelBtn}>
        <Link to={"/clientes"}>
          <button>CLIENTES</button>
        </Link>
        <Link to={"/funcionarios"}><button>FUNCIONÁRIOS</button></Link>
        <Link to={"/quartos"}><button>QUARTOS</button></Link>
    </div>
  )
}

export default PainelButton