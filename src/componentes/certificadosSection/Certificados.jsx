import React from 'react';
import styles from './certificados.module.css';

import certificado1 from '../../images/CERTIFICADO DESARROLLO WEB.png';
import certificado2 from '../../images/CertificadoJavaScript.png';
import certificado3 from '../../images/CertificadoDesarrolloFrontEnd.png';

const Certificados = () => {
  return (
    <section className={styles.certificadosContainer} id='certificados'>
        <div className={styles.h2Container}>
            <h2>Mis <span>Certificados</span></h2>
        </div>
    <div className={styles.certificados}>
      <img src={certificado1} alt='certificado' />
      <img src={certificado2} alt='certificado' />
      <img src={certificado3} alt='certificado' />
    </div>
    </section>
  )
}

export default Certificados