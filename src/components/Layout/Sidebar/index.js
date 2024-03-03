import {Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"// import {faHome} from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import LogoS from '../../../assets/images/logo.png'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import LogoSubTitle from '../../../assets/images/logo_sub.png'
const Sidebar =()=>(
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo'></img>
      </Link>
    <nav>
      <NavLink exact="true"
      activeclassname='active' to="/">
        <FontAwesomeIcon icon={ faHome } color='#4d4d4e'/> 
      </NavLink>
      <NavLink exact="true"
      activeclassname='active' className='about-link' to="/about">
        <FontAwesomeIcon icon={ faUser } color='#4d4d4e'/> 
      </NavLink>
      <NavLink exact="true"
      activeclassname='active' className='contact-link' to="/contact">
        <FontAwesomeIcon icon={ faEnvelope } color='#4d4d4e'/> 
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target='_blank' rel='norefreer' href='https://www.linkedin.com/in/harsh-patare-3259b8219/'>
          <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
        </a>
      </li>
      <li>
        <a target='_blank' rel='norefreer' href='https://github.com/IamHarsh02'>
          <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
        </a>
      </li>
      <li>
        <a target='_blank' rel='norefreer' href='https://www.facebook.com/harsh.patare'>
          <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
        </a>
      </li>
    </ul>
       </div>
)

export default Sidebar