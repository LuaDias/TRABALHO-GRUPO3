import React from 'react'
import styles from './Get.module.css'

function GetFuncionarios() {
  return (
    <section className={styles.getFunc}>
      <h1>FUNCIONÁRIOS</h1>
    <form>            
      <label>
         Nome
        <input id='$nome' name='nome' type='text' />
      </label>
      <label>Usuário
        <input id='$usuario' type='text' />
      </label>
       <label>CPF
        <input id='$cpf' type='text' />
      </label>
      <label>Função
      <input id='$funcao' type='text' />
      </label>
      <label>Turno
      <input id='$turno' type='text' />
      </label>
      <button>Adicionar</button>
    </form>
    </section>
  )
}

export default GetFuncionarios