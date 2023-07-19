import React from 'react';
import styles from './section1.module.css';

import {BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs';
import { Avatar, Button } from '@nextui-org/react';
import cvpdf from '../../images/CvGonzaloHaag.pdf';
import imagenMia from '../../images/fotoCv.jpg';

const Section1 = () => {
  return (
    <section className={styles.sectionOneContainer}>
      <div className={styles.column}>
        <div className={styles.textContainer}>
          <p className={styles.soy}>Hola, me llamo</p> 
          <p className={styles.name}>Gonzalo Haag</p>
          <p className={styles.profesion}>y soy <span>Desarrollador Web FullStack .</span></p>
          <p className={styles.description}>
            Mi pasión por la tecnología y el diseño se combina para convertir
            ideas en realidad, creando sitios web funcionales, estéticamente
            atractivos y optimizados para una experiencia de usuario
            excepcional. Con experiencia en diversos lenguajes de programación y
            herramientas modernas, me esfuerzo por mantenerme actualizado con
            las últimas tendencias y mejores prácticas en el desarrollo web. Mi
            objetivo es proporcionar soluciones personalizadas y eficientes que
            impulsen el crecimiento y el éxito de mis clientes.
          </p>
        </div>
        <div className={styles.redesContainer}>
          <a href='https://www.linkedin.com/in/gonzalo-haag/' target='_blank' rel='noreferrer' >
             {<BsLinkedin />}
          </a>
          <a href='https://www.instagram.com/lalohaag/?hl=es' target='_blank' rel='noreferrer'>
             {<BsInstagram />}
          </a>
          <a href='https://twitter.com/LalooHaag?t=uFjcizIL20e3H9Omy918AQ&s=09' target='_blank' rel='noreferrer'>
            {<BsTwitter />}
          </a>
        </div>
        <div className={styles.buttonContainer}>
         <a href={cvpdf} download='CvGonzaloHaag'
         style={{textDecoration:'none'}}
         >
          <Button color='gradient'
          style={{fontWeight:'600',letterSpacing:'0.8px',zIndex:'0'}}
          >
            Descargar CV
          </Button>
          </a>
          </div>
        </div>
        <div className={styles.imgContainer}>
        <Avatar
          src={imagenMia}
          zoomed
          color="primary"
          bordered
          style={{
            width:'15em',
            height:'15em'
          }}
        />
        </div>
    </section>
  )
}

export default Section1