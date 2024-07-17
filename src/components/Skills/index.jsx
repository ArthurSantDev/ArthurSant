import React, { useEffect } from "react";
import { RiShareBoxLine } from "react-icons/ri";
import { SiReact, SiRedux, SiNodedotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import './index.css';

const Index = () => {
  useEffect(() => {
    const revealSettings = {
      distance: '100px',
      duration: 1000,
      reset: true,
      interval: 200
    };
    if (window.innerWidth > 768) { // Ajuste o tamanho conforme necessário
      ScrollReveal().reveal('.skill', {
        ...revealSettings,
        origin: 'right'
      });
    } else {
      // Para telas menores, sem animação ou com origem diferente
      ScrollReveal().reveal('.skill', {
        ...revealSettings,
        origin: 'left'
      });
    }
  }, []);

  return (
    <div>
      <div className="skills_container">
        <div className='skills'>
          <div className='skill shadow'>
            <SiReact className="one" />
            <h2 className="one">Framworks</h2>
            <div className="skill-text">
              <p>Utilizo de Frameworks para um projeto mais ágil, eficaz e de simples manutenção.</p>
            </div>
            <div className="link">
              <a href="https://github.com/ArthurSantDev/Nike" target='_blank'>One project with<RiShareBoxLine /></a>
            </div>
          </div>

          <div className='skill shadow'>
            <SiRedux className="two" />
            <h2 className="two">Libraries</h2>
            <div className="skill-text">
              <p>Faço uso de bibliotecas como subprogramas para evoluir o desenvolvimento.</p>
            </div>
            <div className="link">
              <a href="https://github.com/ArthurSantDev/Mern.In" target='_blank'>One project with<RiShareBoxLine /></a>
            </div>
          </div>

          <div className='skill shadow'>
            <FaPython className="three" />
            <h2 className="three">Data Science</h2>
            <div className="skill-text">
              <p>Uso do estudo dos dados para formular insights que sejam relevantes e úteis.</p>
            </div>
            <div className="link">
              <a href="https://github.com/ArthurSantDev/Crud-SQL" target='_blank'>One project with<RiShareBoxLine /></a>
            </div>
          </div>

          <div className='skill shadow'>
            <SiNodedotjs className="four" />
            <h2 className="four">API's</h2>
            <div className="skill-text">
              <p>Utilizo API's, para extrair e consumir dados de diferentes tipos de sistemas.</p>
            </div>
            <div className="link">
              <a href="https://github.com/ArthurSantDev/Mern.In" target='_blank'>One project with<RiShareBoxLine /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;