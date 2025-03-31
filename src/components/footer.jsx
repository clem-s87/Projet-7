import logo from '../assets/images/LOGO-blanc.png';
import '../style/footer.css';

function footer () {
    return (
        <footer>
            <img src={logo} alt='Photo logo Kasa' className='footer_logo'></img>
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default footer;