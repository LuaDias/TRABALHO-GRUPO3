import React from 'react'
import styles from './Get.module.css'

function GetQuartos() {
  return (
    <section className={styles.quartoForm}>
      <h1>QUARTOS</h1>
    <form>            
      <label>
         Nome do quarto
        <input id='$nome' type='text' />
      </label>
      <label>
        Descrição
        <input id='$descricao' type='text' />
      </label>
      <button>Adicionar</button>
    </form>
    </section>
  )
}

export default GetQuartos