import React, { useRef } from 'react';

import styles from './contacto.module.css';

import emailjs from '@emailjs/browser';


const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e.target.elements);
    const {nombre,email,numero,mensaje} = e.target.elements;

    

    emailjs.sendForm('mywebsite', 'template_6t038st', form.current, 'DH5vBgJVc6K2Kszd1')
      .then((result) => {
          alert('Mensaje enviado')
          
      }, (error) => {
          console.log(error.text);
      });
      
      nombre.value = '';
      email.value = '';
      numero.value = '';
      mensaje.value = '';
  };

  return (
    <section className={styles.contactoContainer} id='contacto'>
        <div className={styles.h2Container}>
            <h2>Contacta<span>me</span></h2>
        </div>
        <div className={styles.formContainer}>
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
            <input type='text' placeholder='Ingresá tu nombre' name='nombre' />
            <input type='email' placeholder='Ingresá tu email' name='email' />
            <input type='number' placeholder='Ingresá tu telefono' name='numero' />
            <textarea placeholder='Motivo del contacto' name='mensaje'>
            
            </textarea>
            <input type='submit' value='Enviar'
            style={{
              color:'white',
              fontWeight:'600',
              background:'green',
              textTransform:'uppercase',
              letterSpacing:'1.2px',
              cursor:'pointer'
            }} 
            />
        </form>
        </div>

    </section>
  )
}

export default Contacto