import React, { useEffect, useState } from 'react';
import PainelButton from './PainelButton/PainelButton';
import styles from './Painel.add.css'

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
      <div className = {styles.painelAdd}> 
         <h1> Olá Json,<br /> seja bem vindo(a) ao seu painel <br /> de administrador </h1>
               <PainelButton />
      </div>
   )
}

export default Painel;
