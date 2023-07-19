import React from 'react';
import styles from './proyectos.module.css';

import imagen1 from '../../images/portfolio1.jpg';
import imagen2 from '../../images/portfolio2.jpg';
import imagen3 from '../../images/portfolio3.jpg';
import imagen4 from '../../images/portfolio4.jpg';
import imagen5 from '../../images/portfolio5.jpg';
import imagen6 from '../../images/portfolio6.jpg';


const Proyectos = () => {
  return (
    <section className={styles.proyectosContainer} id='proyectos'>
    <div className={styles.h2Container}>
     <h2><span>Proyectos</span> recientes</h2>
     </div>
     <div className={styles.proyectos}>
     <a className={styles.proyecto} href='https://books-app-search.netlify.app/' target='_blank' rel='noreferrer'>
        <img src={imagen1} alt='imagen proyecto 1' />
        <div className={styles.capa}>
            <h3>Buscador de libros</h3>
            <p>La funcíon de esta aplicación es 
                realizar una búsqueda del libro que 
                se desee.
            </p>
        </div>
     </a>
     <a className={styles.proyecto} href='https://clima-app-search-country-city.netlify.app/' target='_blank' rel='noreferrer'>
        <img src={imagen2} alt='imagen proyecto 2' />
        <div className={styles.capa}>
        <h3>Clima App</h3>
            <p>La funcíon de esta aplicación es obtener 
            el clima de cualquier parte del mundo.
            </p>
        </div>
     </a>
     <a className={styles.proyecto} href='https://eccomerce-pocho-firebase-frontend.vercel.app/' target='_blank' rel='noreferrer'>
        <img src={imagen3} alt='imagen proyecto 3' />
        <div className={styles.capa}>
            <h3>Eccommerce</h3>
            <p>Eccommerce realizado para la venta de 
                mates.
            </p>
        </div>
     </a>
     <a className={styles.proyecto} href='https://pokedex-consumiendo-api.vercel.app/' target='_blank' rel='noreferrer'>
        <img src={imagen4} alt='imagen proyecto 4' />
        <div className={styles.capa}>
            <h3>Pokedex</h3>
            <p>Aplicación para filtrar pokemones segun 
                la categoria que se desee.
            </p>
        </div>
     </a>
     <a className={styles.proyecto} href='https://proyecto-heron.vercel.app/' target='_blank' rel='noreferrer'>
        <img src={imagen5} alt='imagen proyecto 5' />
        <div className={styles.capa}>
            <h3>Sitio Web Grupo Heron</h3>
            <p>Sitio web realizado para una 
            agencia de marketing.
            </p>
        </div>
     </a>
     <a className={styles.proyecto} href='https://proyecto-heron.vercel.app/' target='_blank' rel='noreferrer'>
        <img src={imagen6} alt='imagen proyecto 6' />
        <div className={styles.capa}>
            <h3>Sitio Web Grupo Heron</h3>
            <p>Sitio web realizado para una 
            agencia de marketing.
            </p>
        </div>
     </a>
     </div>
    </section>
  )
}

export default Proyectos