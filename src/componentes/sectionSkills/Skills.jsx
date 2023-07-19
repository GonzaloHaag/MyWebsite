import React from 'react';
import styles from './skills.module.css';

import {FaHtml5} from 'react-icons/fa';
import { BiLogoCss3 } from 'react-icons/bi';
import {DiJavascript1} from 'react-icons/di';
import {GrReactjs} from 'react-icons/gr';
import {TbBrandNextjs} from 'react-icons/tb';

const Skills = () => {
  return (
    <section className={styles.sectionSkillsContainer} id='skills'>
    <div className={styles.h2Container}>
     <h2>Mis <span>Skills</span></h2>
     </div>
     <div className={styles.skills}>
      {<FaHtml5 className={styles.skill} />}
      {<BiLogoCss3 className={styles.skill} />}
      {<DiJavascript1 className={styles.skill} />}
      {<GrReactjs className={styles.skill} />}
      {<TbBrandNextjs className={styles.skill} />}

     </div>
    </section>
  )
}

export default Skills