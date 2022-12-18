import React from 'react';
import Buttons from '../GlobalButtons/Buttons';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import ItemsCard from './FuncItemsCard';
import Banner from './Banner';


function Funcionarios() {
   let [lista, setLista] = useState([]);

   useEffect(() => {
      let url = 'http://localhost:3000/funcionarios/';

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

export default Funcionarios;
