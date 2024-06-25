import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import React, { useState } from 'react';
import './index.css';

const one = "<";
const two = " />";

function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className='Navbar shadow'>
        <div className='nav_title'>
          <Link to='/'>{one}ArthurSant{two}</Link>
        </div>
        <div className='nav_toggle' onClick={toggleMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <div className={`nav_links ${isOpen ? 'open' : ''}`}>
          <ScrollLink to='Home' onClick={toggleMenu}>     HOME      </ScrollLink>
          <ScrollLink to='About' onClick={toggleMenu}>    ABOUT     </ScrollLink>
          <ScrollLink to='Projects' onClick={toggleMenu}> PROJECTS  </ScrollLink>
          <ScrollLink to='Footer' onClick={toggleMenu}>   CONTACTS  </ScrollLink>
        </div>
      </div>
    </nav>
  );
}

export default Index;