import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import './index.css'

const one = "<";
const two = " />";

function index() {
  return (
    <nav>
      <div className='Navbar shadow'>
        <div className='nav_title'>
          <Link to='/'>{one}ArthurSant{two}</Link>
        </div>
        <div className='nav_links'>
          <ScrollLink to='Home'>      HOME      </ScrollLink>
          <ScrollLink to='About'>     ABOUT     </ScrollLink>
          <ScrollLink to='Projects'>  PROJECTS  </ScrollLink>
          <ScrollLink to='Footer'>    CONTACTS  </ScrollLink>
        </div>
      </div>
    </nav>
  )
}

export default index