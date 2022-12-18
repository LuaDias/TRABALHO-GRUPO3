import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import styles from './Put.module.css'

function PutQuartos() {

  let [quartos] = useState([]);

  function Selects(ar) {
    ar.unshift("Selecione o quarto")
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
    axios.get("http://localhost:3000/quartos").then(e => {
      let nomes = []
      e.data.map(el => nomes.push(el.nome))
      Selects(nomes)
    })
  }, [])

  useEffect(() => {
    Selects(quartos)
  }, [quartos])

  function mudar() {
    axios.get("http://localhost:3000/quartos?nome=" + $genero.value).then(elemento => {
      let obj = elemento.data[0]
      $nome.value = obj.nome
      $descricao.value = obj.descricao
      $imagem.value = obj.imagem
      $btclick.sid = obj.id
    })
  }

  function Atualizar() {

    let obj = {
      nome: $nome.value,
      descricao: $descricao.value,
      imagem: $imagem.value,
    }

    axios.put("http://localhost:3000/quartos/" + $btclick.sid, obj);

    alert('Quarto atualizado com sucesso!')

    window.location.reload()

  }

  return (
    <section className={styles.formQuartos}>
      <h1>QUARTOS</h1>
      <p>SELECIONE QUARTO A SER ATUALIZADO</p>
      <form>
        <select id="$genero" onChange={mudar}>
          <option value="suite bela vista">suite bela vista</option>
        </select>
        <label>
          Nome do quarto
          <input id='$nome' type='text' />
        </label>
        <label>
          Descrição
          <input id='$descricao' type='text' />
        </label>
        <label>
          Link da imagem
          <input id='$imagem' type="img" />
        </label>
        <button id="$btclick" onClick={Atualizar}>Atualizar</button>
      </form>
    </section>
  )
}

export default PutQuartos
