import React from 'react'
import styles from './Get.module.css'
import axios from 'axios';

function GetQuartos() {
  const addInfo = async () => {
    const post = {
      nome: $nome.value,
      descricao: $descricao.value,
    };
    
    await axios.post("http://localhost:3000/Quartos", post);
    
    alert("ADICIONADO COM SUCESSO!");
    
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
      <button onClick={addInfo}>Adicionar</button>
    </form>
    </section>
  )
}

export default GetQuartos