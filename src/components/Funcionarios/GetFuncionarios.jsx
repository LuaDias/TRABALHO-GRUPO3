import React from 'react'
import styles from './Get.module.css'
import axios from 'axios';

function GetFuncionarios() {
  const addInfo = async () => {
    const post = {
      nome: $nome.value,
      usuario: $usuario.value,
      cpf: $cpf.value,
      turno: $turno.value,
      funcao: $funcao.value,
    };

    await axios.post("http://localhost:3000/funcionarios/", post);

    alert("ADICIONADO COM SUCESSO!");

    window.location.reload()
  }
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
      <button onClick={addInfo}>Adicionar</button>
    </form>
    </section>
  )
}

export default GetFuncionarios