import React, { useState } from 'react';
import styles from './header.module.css';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

import { Link } from 'react-scroll';
import NavbarDesktop from '../NavbarDesktop/NavbarDesktop';

const Header = () => {
    
    const [openMenu,setOpenMenu] = useState(false);
    const handleOpenMenu = () => {
        setOpenMenu(true);
    }
    const handleCloseMenu = () => {
        setOpenMenu(false);
    }
    const handleInicio = () => {
      setOpenMenu(false);
      window.scrollTo(0,0);
    }
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerFlex}>
       <p>MyWebsite</p>
       {
        openMenu ? <AiOutlineClose className={styles.manejadorMenu} onClick={handleCloseMenu} />
        : <AiOutlineMenu className={styles.manejadorMenu} onClick={handleOpenMenu} />
       }
      </div>
       {
        openMenu && 
        <nav className={styles.navbar}>
            <hr/>
            <ul>
              <Link to='/'
               spy = {true}
               smooth = {true}
               offset={50}
               duration={500}
               onClick={handleInicio}
              >
                <li>
                  Inicio
                </li>
                </Link>
                <Link to='skills'
                spy = {true}
                smooth = {true}
                offset={-100}
                duration={500}
                onClick={handleCloseMenu}
                >
                <li>
                 Skills
                 </li>
                 </Link>
                 <Link to='proyectos'
                  spy = {true}
                  smooth = {true}
                  offset={-60}
                  duration={500}
                  onClick={handleCloseMenu}
                 >
                <li>
                  Proyectos
                </li>
                </Link>
                <Link to='certificados'
                 spy = {true}
                 smooth = {true}
                 offset={-60}
                 duration={500}
                 onClick={handleCloseMenu}
                >
                
                <li>
                  Certificados
                </li>
                </Link>
                <Link to='contacto'
                 spy = {true}
                 smooth = {true}
                 offset={50}
                 duration={500}
                 onClick={handleCloseMenu}
                >
                <li>
                  Contactame
                </li>
                </Link>
            </ul>
        </nav>
       }
     <NavbarDesktop  />
    </header>
  )
}

export default Header