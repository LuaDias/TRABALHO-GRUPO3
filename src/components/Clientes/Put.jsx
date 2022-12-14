import React from 'react'
import styles from './Put.module.css'

function Put() {
  return (
    <section className={styles.putForm}>
      <h1>CLIENTES</h1>
      <p>SELECIONE O CLIENTE A SER ATUALIZADO</p>
    <form>      
      <select name="" id="">
        <option value=""></option>
      </select>
            
      <label htmlFor='nome'>
         Nome do cliente
        <input id='nome' name='nome' type='text' />
      </label>
      <label>E-mail do cliente
        <input type='text' />
      </label>
       <label>Data de inscrição
        <input type='text' />
      </label>
      <button>Atualizar</button>
    </form>
    </section>
   
  )
}

export default Put