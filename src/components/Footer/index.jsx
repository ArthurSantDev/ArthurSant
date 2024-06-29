import { HiOutlineCode } from "react-icons/hi"; 
import { BiCheckShield } from "react-icons/bi"; 
import { FaWhatsapp } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import { MdEmail } from "react-icons/md"; 
import { AiFillLinkedin } from "react-icons/ai"; 
 

import React from 'react'
import './index.css'

const index = () => {
  return (
    <div id='Footer' className="Container">
      <div className="Footer">
        {/* <div className="footer-shields">
          <div className="footer-shield">
            <BiCheckShield />
            <h1>Segurança, do início ao fim</h1>
          </div>
          <div className="footer-shield">
            <HiOutlineCode />
            <h1>Código eficiente e simples</h1>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-link-column">
            <h1>Formação</h1>
            <a>Estácio de Sá</a>
            <a>One Bit Code</a>
            <a>Udemy</a>
            <a>Curso em Vídeo</a>
          </div>
          <div className="footer-link-column">
            <h1>Redes sociais</h1>
            <a>Linkedin</a>
            <a>Github</a>
            <a>Whatsapp</a>
            <a>E-mail</a>
          </div>
          <div className="footer-link-column">
            <h1>Duvida</h1>
            <a>Agenda</a>
            <a>Horários</a>
            <a>Como contatar</a>
          </div>
        </div> */}

        <div className="footer-center">
          <div className='footer-bar shadow'>
            <a href="https://www.linkedin.com/in/devarthursant" target="_blank">
              <AiFillLinkedin className='footer-bar-link'/>
            </a>
            <a href="https://github.com/ArthurSantDev" target="_blank" >
              <AiFillGithub className='footer-bar-link'/>
            </a>
            <a href="https://wa.me/5524988638508" target="_blank">
              <FaWhatsapp className='footer-bar-link'/>
            </a>
            <a href="mailto:DevArthurSant@gmail.com" target="_blank">
              <MdEmail className='footer-bar-link'/>
            </a>
          </div>
          <p class="footer-copy">
            <a href="https://github.com/ArthurSantDev" target="_blank" class="footer__copy-link">&#169;2024 Arthur Sant. All right reserved.</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default index