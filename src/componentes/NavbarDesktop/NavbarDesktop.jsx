

import React, { useState } from 'react';
import styles from './navbarDesktop.module.css';
import { Link } from 'react-scroll';

const NavbarDesktop = () => {
  const [activeItem, setActiveItem] = useState('inicio');

  const handleInicio = () => {
    window.scrollTo(0, 0);
  };

  const handleLinkClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className={styles.navbarDesktop}>
      <ul>
        <Link
          to="/"
          
          style={{ cursor: 'pointer' }}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
         
        >
          <li className={`${styles.navLink} ${activeItem === 'inicio' ? styles.active : ''}`}
           onClick={() => {
            handleInicio();
            handleLinkClick('inicio');
          }}
          >Inicio</li>
        </Link>
        <Link
          to="skills"
         
          style={{ cursor: 'pointer' }}
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={() => handleLinkClick('skills')}
        >
          <li  className={`${styles.navLink} ${activeItem === 'skills' ? styles.active : ''}`}>Skills</li>
        </Link>
        <Link
          to="proyectos"
         
          style={{ cursor: 'pointer' }}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() => handleLinkClick('proyectos')}
        >
          <li  className={`${styles.navLink} ${activeItem === 'proyectos' ? styles.active : ''}`}>Proyectos</li>
        </Link>
        <Link
          to="certificados"
          
          style={{ cursor: 'pointer' }}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() => handleLinkClick('certificados')}
        >
          <li className={`${styles.navLink} ${activeItem === 'certificados' ? styles.active : ''}`}>Certificados</li>
        </Link>
        <Link
          to="contacto"
         
          style={{ cursor: 'pointer' }}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => handleLinkClick('contacto')}
        >
          <li  className={`${styles.navLink} ${activeItem === 'contacto' ? styles.active : ''}`}>Contactame</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;