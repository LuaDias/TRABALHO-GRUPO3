import React from 'react';
import axios from 'axios';
import Buttons from '../GlobalButtons/Buttons';
import styles from './Cliente.module.css'
import perfil from '../../assets/img/perfil.jpg'



function cliente() {
   

   return  (
         <section className={styles.clienteGet}>
            <h1>CLIENTES</h1>
            <div className={styles.divContainer}>
            <div className={styles.divCards}>
               <div><img src={perfil} /></div>
               <div><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Blanditiis quibusdam quaerat harum, rem eum eaque ipsum officia hic.
                   </span></div>
            </div>
            <div className={styles.divCards}>
               <div><img src={perfil} /></div>
               <div><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Blanditiis quibusdam quaerat harum, rem eum eaque ipsum officia hic.
                   </span></div>
            </div>
            <div className={styles.divCards}>
               <div><img src={perfil} /></div>
               <div><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Blanditiis quibusdam quaerat harum, rem eum eaque ipsum officia hic.
                   </span></div>
            </div>
            </div>
          <Buttons />
         </section>
   )
}

export default cliente