import React from 'react';
import PainelButton from './PainelButton/PainelButton';
import styles from './Painel.module.css'
import background from '../../assets/img/piscina.jpg'


function Painel() {

   return (
      <div className={styles.painel} style={{backgroundImage: `url(${background})`,height:"1094px",width:"1736" }}>
         <section >
         <form>
         <h1> Olá Json,<br /> seja bem vindo(a) ao seu painel <br /> de administrador </h1>
         <PainelButton />
         </form>
         </section>
      </div>
   )
}

export default Painel;
