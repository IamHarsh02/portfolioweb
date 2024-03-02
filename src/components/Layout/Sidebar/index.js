import {Link } from 'react-router-dom'
import '.index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubTitle from '../../assets/images/logo-sub.png'
const Sidebar =()=>(
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo'></img>
        <img src={LogoSubTitle} alt='slobo'></img>
      </Link>
    </div>
)

export default Sidebar