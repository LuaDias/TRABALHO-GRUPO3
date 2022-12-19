import React from 'react';
import PainelButton from './PainelButton/PainelButton';
import styles from './Painel.module.css'
import background from '../../assets/img/piscina.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'


function Painel() {

   return (
      <div className={styles.painel} style={{ backgroundImage: `url(${background})`, height: "100vh", backgroundSize: 'cover' }}>
         <section >
            <form>
               <h1 data-aos="zoom-in" data-aos-delay="300"> Seja bem vindo(a) ao seu painel <br /> de administrador </h1>
               <PainelButton />
            </form>
         </section>
      </div>
   )
}
AOS.init()

export default Painel;
