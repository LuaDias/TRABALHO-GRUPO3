import React from 'react';
import PainelButton from './PainelButton/PainelButton';
import styles from './Painel.module.css'

function Painel() {

   return (
      <div className={styles.painel}>
         <h1> Olá Json,<br /> seja bem vindo(a) ao seu painel <br /> de administrador </h1>
         <PainelButton />
      </div>
   )
}

export default Painel;
