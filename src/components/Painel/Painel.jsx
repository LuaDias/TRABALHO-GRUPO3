import React, { useEffect, useState } from 'react';
import Funcionarios from '../Funcionarios/Funcionarios';
import Clientes from '../Clientes/Clientes';
import Quartos from '../Quartos/Quartos';
import PainelButton from './PainelButton/PainelButton';


function Painel() {

   // let [lista, setLista] = useState([]);

   // useEffect(() => {
   //    let url = 'https://localhost:3000/clientes';

   //    const getPosts = async () => {
   //       const { data: res } = await axios.get(url);
   //       setLista(res)
   //    }
   //    getPosts();
   // }, [])

   return (
      <div>teste
         <PainelButton />
      </div>
   )
}

export default Painel;
