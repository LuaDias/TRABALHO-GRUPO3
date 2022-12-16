import React from 'react'
import styles from './Get.module.css'

function Get() {
  return (
    <section className={styles.getForm}>
      <h1>CLIENTES</h1>
      <form>
        <label>
          Nome do cliente
          <input id='$nome' name='nome' type='text' />
        </label>
        <label>E-mail do cliente
          <input id='$email' type='text' />
        </label>
        <label>Data de inscrição
          <input id='$data' type='text' />
        </label>
        <button>Adicionar</button>
      </form>
    </section>
  )
}

export default Get