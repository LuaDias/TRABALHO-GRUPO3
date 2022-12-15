import styles from './Put.module.css'
import axios from "axios";
import { useEffect, useState } from "react";

function Put() {

  let [cliente] = useState([]);

  function Selects(ar) {
    ar.unshift("Selecione o nome do cliente")
    $genero.innerHTML = ""
    ar.forEach((e, i) => {
      let op = document.createElement("option")
      if (i == 0) {
        op.setAttribute("disabled", 'true');
        op.setAttribute("selected", 'true');
      }
      op.value = e
      op.innerHTML = e
      $genero.appendChild(op)
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3000/clientes").then(e => {
      let nomes = []
      e.data.map(el => nomes.push(el.nome))
      Selects(nomes)
    })
  }, [])

  useEffect(() => {
    Selects(cliente)
  }, [cliente])

  function mudar() {
    axios.get("http://localhost:3000/clientes?nome=" + $genero.value).then(elemento => {
      let obj = elemento.data[0]
      $nome.value = obj.nome
      $email.value = obj.email
      $data.value = obj.data
      $btclick.sid = obj.id
    })
  }

  function Atualizar() {

    let obj = {
      nome: $nome.value,
      email: $email.value,
      data: $data.value,
      // genero: $genero.value,
    }

    axios.put("http://localhost:3000/clientes/" + $btclick.sid, obj);

    alert('Cliente atualizado com sucesso!')

    window.location.reload()

  }

  return (
    <section className={styles.putForm}>
      <h1>CLIENTES</h1>
      <p>SELECIONE O CLIENTE A SER ATUALIZADO</p>
      <form>
        <select id="$genero" onChange={mudar}>
          <option value="Isabela Martiz">Isabela Martiz</option>
        </select>

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
        <button id="$btclick" onClick={Atualizar}>Atualizar</button>
      </form>
    </section>

  )
}

export default Put
