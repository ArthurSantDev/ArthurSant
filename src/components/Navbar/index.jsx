import { Link } from 'react-router-dom';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import React, { useState, useRef, useEffect } from 'react';
import './index.css';

const one = "<";
const two = " />";

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   Events.scrollEvent.register('begin', function() {
  //   });
  //   Events.scrollEvent.register('end', function() {
  //   });
  //   scrollSpy.update();
  //   return () => {
  //     Events.scrollEvent.remove('begin');
  //     Events.scrollEvent.remove('end');
  //   };
  // }, []);

  return (
    <nav ref={menuRef}>
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
          <ScrollLink
            to='Home'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
          >
            HOME
          </ScrollLink>

          <ScrollLink
            to='About'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
          >
            ABOUT
          </ScrollLink>

          <ScrollLink
            to='Projects'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
          >
            PROJECTS
          </ScrollLink>
          
          <ScrollLink
            to='Footer'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
          >
            CONTACTS
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}

export default Index;