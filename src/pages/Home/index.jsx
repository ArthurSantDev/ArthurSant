import { FaPython } from "react-icons/fa"; 
import { SiReact } from "react-icons/si"; 
import { SiNodedotjs } from "react-icons/si"; 
import { TbBrandRedux } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import { MdEmail } from "react-icons/md"; 
import { AiFillLinkedin } from "react-icons/ai"; 

import './index.css'
import Stacks from '../../components/Stacks'

const index = () => {
  return (
    <div id='Home'>
      <div id="Home-container">
        <div>
          <div class="profile-section">
            <div className='profile'>
              <div class="animated-text">
                  <h3>Olá, meu nome é</h3>
                  <h1>Arthur Sant</h1>
                  <h2>
                      e eu sou 
                      <span class="typing"></span>
                  </h2>
              </div>
              <div class="social shadow">
                  <a href="https://www.linkedin.com/in/devarthursant" target="_blank">
                  <AiFillLinkedin className='icon'/>
                  </a>
                  <a href="https://github.com/ArthurSantDev" target="_blank">
                    <AiFillGithub className='icon'/>
                  </a>
                  <a href="https://wa.me/5524988638508" target="_blank">
                    <FaWhatsapp className='icon'/>
                  </a>
                  <a href="mailto:DevArthurSant@gmail.com" target="_blank">
                    <MdEmail className='icon'/>
                  </a>
              </div>
              <Stacks />
            </div>
          </div>
        </div>

        <div className="skills_container">
          <div className='skills'>
            <div className='skill shadow'>
              <SiReact className="one" />
              <h2 className="one">Framworks</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quam veioenvo</p>
              <div className="link">
                <a href="https://github.com/ArthurSantDev/Nike" target='_blank'>One project with..._</a>
              </div>
            </div>

            <div className='skill shadow'>
              <TbBrandRedux className="two" />
              <h2 className="two">Libraries</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quam veioenvo</p>
              <div className="link">
                <a href="https://github.com/ArthurSantDev/Mern.In" target='_blank'>One project with..._</a>
              </div>
            </div>

            <div className='skill shadow'>
              <FaPython className="three" />
              <h2 className="three">Data Science</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quam veioenvo</p>
              <div className="link">
                <a href="https://github.com/ArthurSantDev/Crud-SQL" target='_blank'>One project with..._</a>
              </div>
            </div>

            <div className='skill shadow'>
              <SiNodedotjs className="four" />
              <h2 className="four">API's</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quam veioenvo</p>
              <div className="link">
                <a href="https://github.com/ArthurSantDev/Mern.In" target='_blank'>One project with..._</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index