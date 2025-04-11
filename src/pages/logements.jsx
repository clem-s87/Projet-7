import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/carrousel.jsx';
import data from '../assets/data.json';
import Info from '../components/logement-infos.jsx';

function logement () {

    const { id } = useParams();
    const logement = data.find((item) => item.id === id);

    return (
        <div>
        <Header />
        <Carrousel pictures={logement.pictures} title={logement.title} />
        <Info title={logement.title} localisation={logement.location} tags={logement.tags} host={logement.host.name} 
        image={logement.host.picture} description={logement.description} equipements={logement.equipments}/>
        <Footer />
        </div>
    )
}

export default logement;