import { FaWhatsapp } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import { MdEmail } from "react-icons/md"; 
import { AiFillLinkedin } from "react-icons/ai"; 

import './index.css'
import Stacks from '../../components/Stacks'
import Skills from '../../components/Skills'

const index = () => {
  return (
    <div id='Home'>
      <div id="Home-container">
        <div>
          <div className="profile-section">
            <div className='profile'>
              <div class="animated-text">
                  <h3>Olá, meu nome é</h3>
                  <h1>Arthur Sant</h1>
                  <h2>
                      e sou 
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

        <Skills />
      </div>
    </div>
  )
}

export default index