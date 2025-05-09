import logo from '../assets/images/LOGO-blanc.png';
import '../style/footer.css';
import { Link } from 'react-router-dom';

function footer () {
    return (
        <footer>
            <Link to={'/'}><img src={logo} alt='Photo logo Kasa' className='footer_logo'></img></Link>
            <p className='footer_text'>© 2020 Kasa. All <span className='footer_text_mobile'>rights reserved</span></p>
        </footer>
    )
}

export default footer;