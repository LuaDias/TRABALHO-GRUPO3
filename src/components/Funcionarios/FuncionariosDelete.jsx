import React from 'react'
import styles from './Put.module.css'
import axios from "axios";
import { useEffect, useState } from "react";


function FuncionariosDelete() {
  let [funcionario] = useState([]);

  function Selects(ar) {
    ar.unshift("Selecione o nome do funcionário")
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
    axios.get("http://localhost:3000/funcionarios").then(e => {
      let nomes = []
      e.data.map(el => nomes.push(el.nome))
      Selects(nomes)
    })
  }, [])

  useEffect(() => {
    Selects(funcionario)
  }, [funcionario])

  function mudar() {
    axios.get("http://localhost:3000/funcionarios?nome=" + $genero.value).then(elemento => {
      let obj = elemento.data[0]
      $nome.value = obj.nome
      $usuario.value = obj.usuario
      $cpf.value = obj.cpf
      $turno.value = obj.turno
      $funcao.value = obj.funcao
      $btclick.sid = obj.id
      

    })
  }
  function Deletar() {

    let obj = {
      nome: $nome.value,
      usuario: $usuario.value,
      cpf: $cpf.value,
      turno: $turno.value,
      funcao: $funcao.value,
      genero: $genero.value,
    }

    axios.delete("http://localhost:3000/funcionarios/" + $btclick.sid, obj);

    alert('Funcionário removido com sucesso!')

    window.location.reload()

  }
  return (
    <section className={styles.putFunc}>
      <h1>FUNCIONÁRIOS</h1>
      <p>SELECIONE O FUNCIONÁRIO A SER REMOVIDO</p>
    <form>      
      <select id="$genero" onChange={mudar}>
        <option value="Carlos Alberto">Carlos Alberto</option>
      </select>
            
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
      <button id="$btclick" onClick={Deletar}>Deletar</button>
    </form>
    </section>
   
  )

}

export default FuncionariosDelete