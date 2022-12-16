import React from 'react';
import Buttons from '../GlobalButtons/Buttons';
import Styles from './cliente.module.css'


function cliente() {
   return  (
     
      <div>
         <section>
            <h1>CLIENTES</h1>
         </section>
         <div className={Styles.container}>
            <img src="./imagem" alt="" />

         </div>
         <Buttons />
      </div>
   )
}

export default cliente