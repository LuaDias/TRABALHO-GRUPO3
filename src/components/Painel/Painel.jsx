import React from 'react';
import PainelButton from './PainelButton/PainelButton';
import styles from './Painel.module.css'
import background from '../../assets/img/piscina.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'


function Painel() {

   return (
<<<<<<< HEAD
      <div className={styles.painel} style={{ backgroundImage: `url(${background})`, height: "100vh", backgroundSize: 'cover' }}>
=======
      <div className={styles.painel} style={{backgroundImage: `url(${background})`,height:"1094px",width:"1736" }}>
>>>>>>> 44f5b7e2663b9d5b1cbf46b452ca1738eb0ee026
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
