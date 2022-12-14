import React from 'react'

function PutQuartos() {
  return (
    <section>
      <h1>QUARTOS</h1>
      <p>SELECIONE QUARTO A SER ATUALIZADO</p>
    <form>      
      <select name="" id="">
        <option value=""></option>
      </select>
            
      <label htmlFor='nome'>
         Nome do quarto
        <input id='nome' name='nome' type='text' />
      </label>
      <label>
        Descrição
        <input type='text' />
      </label>
      <button>Atualizar</button>
    </form>
    </section>
  )
}

export default PutQuartos