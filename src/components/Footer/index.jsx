import { FaWhatsapp } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import { MdEmail } from "react-icons/md"; 
import { AiFillLinkedin } from "react-icons/ai"; 
 

import React from 'react'
import './index.css'

const index = () => {
  return (
    <div id='Footer'>
      <div className='footer-links shadow'>
        <a href="https://www.linkedin.com/in/devarthursant" target="_blank">
          <AiFillLinkedin className='footer-link'/>
        </a>
        <a href="https://github.com/ArthurSantDev" target="_blank" >
          <AiFillGithub className='footer-link'/>
        </a>
        <a href="https://wa.me/5524988638508" target="_blank">
          <FaWhatsapp className='footer-link'/>
        </a>
        <a href="mailto:DevArthurSant@gmail.com" target="_blank">
          <MdEmail className='footer-link'/>
        </a>
      </div>
      <p class="footer-copy">
        <a href="https://github.com/ArthurSantDev" target="_blank" class="footer__copy-link">&#169; Arthur Sant. All right reserved</a>
      </p>
    </div>
  )
}

export default index