import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Buttons from '../GlobalButtons/Buttons';
import ItemsCard from './ItemsCard';
import styles from './ItemsCard.css';


function Cliente() {
   let [lista, setLista] = useState([]);

   useEffect(() => {
      let url = 'http://localhost:3000/clientes';

      const getPosts = async () => {
         const { data: res } = await axios.get(url);
         setLista(res);
      };
      getPosts();
   }, [])

   return (
      <div className={styles.homeCliente}>
         <h1>CLIENTES</h1>
         <ItemsCard lista={lista} />
         <Buttons />
      </div>
   )
}

export default Cliente
