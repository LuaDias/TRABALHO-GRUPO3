import React from 'react'
import { Link } from 'react-router-dom';
import styles from './PainelBtn.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function PainelButton() {
  return (
    <div data-aos="zoom-in" data-aos-delay="500" className={styles.painelBtn}>
      <Link to={"/clientes"}>
        <button>CLIENTES</button>
      </Link>
      <Link to={"/funcionarios"}><button>FUNCIONÁRIOS</button></Link>
      <Link to={"/quartos"}><button>QUARTOS</button></Link>
    </div>
  )
}
AOS.init()
export default PainelButton
