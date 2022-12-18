import React from 'react'
import styles from './Get.module.css'
import axios from 'axios';

function GetQuartos() {
  const addInfo = async () => {
    const post = {
      nome: $nome.value,
      descricao: $descricao.value,
      imagem: $imagem.value,
    };

    alert('QUARTO ADICIONADO COM SUCESSO')
    await axios.post("http://localhost:3000/quartos", post);
    window.location.reload()
  }

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
        <label>Link da imagem
          <input id='$imagem' type="img" />
        </label>
        <button onClick={addInfo}>Adicionar</button>
      </form>
    </section>
  )
}

export default GetQuartos
