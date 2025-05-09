import logo from '../assets/images/LOGO.png';
import { Link } from 'react-router-dom';
import '../style/header.css';


function Header () {
    return (
        <header>
            <Link to={'/'}><img src={logo} alt='Photo logo Kasa' className='header_logo'></img></Link>
            <nav>
                <Link to={'/'} className='header-link'> Accueil </Link>
                <Link to={'/about'} className='header-link'> A Propos </Link>
            </nav>
        </header>
    )
}

export default Header;