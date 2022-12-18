import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Buttons from '../GlobalButtons/Buttons';
import ItemsCard from './ItemsCard';
import Banner from './Banner';

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
      <div>
         <Banner />
         <ItemsCard lista={lista} />
         <Buttons />
      </div>
   )
}

export default Cliente
