import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import { Link } from 'react-router-dom';
import '../style/error.css';

function error () {
    return (
        <div>
        <Header />
        <div className='error_main_container'>
        <p className='error_404'>404</p>
        <p className='error_text'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={'/'} className='header-link'> Retournez à la page d'acceuil  </Link>
        </div>
        <Footer />
        </div>
    )
}

export default error;