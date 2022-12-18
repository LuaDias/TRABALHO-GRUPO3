import React from 'react'
import styles from './Get.module.css'
import axios from 'axios';

function Get() {
  const addInfo = async () => {
    const post = {
      nome: $nome.value,
      email: $email.value,
      data: $data.value,
      imagem: "../../src/assets/img/perfil.jpg"
    };

    await axios.post("http://localhost:3000/clientes/", post);

    alert("ADICIONADO COM SUCESSO!");

    window.location.reload()
  }

  return (
    <section className={styles.getForm}>
      <h1>CLIENTES</h1>
      <form>
        <label>
          Nome do cliente
          <input id='$nome' name='nome' type='text' />
        </label>
        <label>E-mail do cliente
          <input id='$email' type='email' aria-required />
        </label>
        <label>Data de inscrição
          <input id='$data' type='date' />
        </label>
        <button onClick={addInfo}>Adicionar</button>
      </form>
    </section>
  )
}

export default Get
