import React from 'react'

function PutFuncionarios() {
  return (
    <section>
      <h1>FUNCIONÁRIOS</h1>
      <p>SELECIONE O FUNCIONÁRIO A SER ATUALIZADO</p>
    <form>      
      <select name="" id="">
        <option value=""></option>
      </select>
            
      <label htmlFor='nome'>
         Nome
        <input id='nome' name='nome' type='text' />
      </label>
      <label>Usuário
        <input type='text' />
      </label>
       <label>CPF
        <input type='text' />
      </label>
      <label>Turno
        <select name="turno">
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </label>
      <label>Função
        <select name="funcao">
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </label>
      <button>Atualizar</button>
    </form>
    </section>
   
  )
}

export default PutFuncionarios