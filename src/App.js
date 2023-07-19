
import './App.css';
import Contacto from './componentes/Contacto/Contacto';
import Header from './componentes/Header/Header';
import Certificados from './componentes/certificadosSection/Certificados';
import Section1 from './componentes/sectionOne/Section1';
import Proyectos from './componentes/sectionProyectos/Proyectos';
import Skills from './componentes/sectionSkills/Skills';

function App() {
  return (
    
    <div className='app-container'>
    
    <Header />
    
    <Section1 />
    
    <Skills />
    

     
   
    <Proyectos />

    <Certificados />

    <Contacto />
    
    </div>
  );
}

export default App;
