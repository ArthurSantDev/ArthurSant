import { RiShareBoxLine } from "react-icons/ri"; 
import './index.css'
import { SiReact } from "react-icons/si"; 
import { SiRedux } from "react-icons/si"; 
import { FaPython } from "react-icons/fa"; 
import { SiNodedotjs } from "react-icons/si";

const index = () => {
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
                <p>Utilizo API's, para extrair e consumir dados de difernetes tipos de sistemas.</p>
              </div>
              <div className="link">
                <a href="https://github.com/ArthurSantDev/Mern.In" target='_blank'>One project with<RiShareBoxLine /></a>
              </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default index