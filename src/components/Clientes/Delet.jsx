import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";



function Delet() {

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

  function Deletar() {

    let obj = {
      nome: $nome.value,
      email: $email.value,
      data: $data.value,
      // genero: $genero.value,
    }

    axios.delete("http://localhost:3000/clientes/" + $btclick.sid, obj);

    alert('Cliente deletado com sucesso!')

    window.location.reload()

  }

  return (
    <section>
      <header style={{background:"#0A2B2B",height: "140px", width: "100%"}}>      
        <h1 style={{color:"white", textAlign:"center",paddingTop:"50px"}}>CLIENTES</h1>
        </header>

      <p style={{textAlign: "center",marginTop: "50px",fontSize: "1.5rem"}}>SELECIONE O CLIENTE A SER REMOVIDO</p>
      <form style={{display:"grid", justifyContent:"center"}}>
        <br />
        <select id="$genero" onChange={mudar}>
          <option value="Isabela Martiz">Isabela Martiz</option>
        </select>

        <label style={{display:"grid", marginTop:"15px"}}>
          Nome do cliente
          <input style={{width: "458px",height: "49px",margin:"5px",background: "#d9d9d9",border: "none"}} id='$data' type='text' />
        </label>
        <label style={{display:"grid"}}>E-mail do cliente
        <input style={{width: "458px",height: "49px",margin:"5px",background: "#d9d9d9",border: "none"}} id='$data' type='text' />
        </label>
        <label style={{display:"grid"}}>Data de inscrição
          <input style={{width: "458px",height: "49px",margin:"5px",background: "#d9d9d9",border: "none"}} id='$data' type='text' />
        </label>
        <button style={{background: "#d9d9d9",color: "black",border: "none", width:"200px", height: "50px", marginTop:"20px",
        borderRadius:"8px", }} id="$btclick" onClick={Deletar}>REMOVER</button>
      </form>
    </section>

  )
}

export default Delet
