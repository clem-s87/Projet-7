import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import { useParams } from 'react-router-dom';

function logement () {

    const { id } = useParams();

    return (
        <div>
        <Header />
        <h1>Récapitulatif du logement {id}</h1>
        <Footer />
        </div>
    )
}

export default logement;