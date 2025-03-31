import logo from '../assets/images/LOGO.png';
import { Link } from 'react-router-dom';
import '../style/header.css'

function Header () {
    return (
        <header>
            <img src={logo} alt='Photo logo Kasa' className='header_logo'></img>
            <nav>
                <p className='header-link'><Link to={''}> Accueil </Link></p>
                <p className='header-link'><Link to={''}> A Propos </Link></p>
            </nav>
        </header>
    )
}

export default Header;