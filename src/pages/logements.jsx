import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/carrousel.jsx';
import data from '../assets/data.json';

function logement () {

    const { id } = useParams();
    const logement = data.find((item) => item.id === id);

    return (
        <div>
        <Header />
        <Carrousel pictures={logement.pictures} title={logement.title} />
        <Footer />
        </div>
    )
}

export default logement;