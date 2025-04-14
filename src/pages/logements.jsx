import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Carrousel from '../components/carrousel.jsx';
import data from '../assets/data.json';
import Info from '../components/logement-infos.jsx';

function logement () {

    const { id } = useParams();
    const navigate = useNavigate();
    const logement = data.find((item) => item.id === id);

    useEffect(() => {
        if (!logement) {
            navigate('/error', { replace: true });
        }
    }, [logement, navigate]);

    if (!logement) return null;

    return (
        <div>
        <Header />
        <Carrousel pictures={logement.pictures} title={logement.title} />
        <Info title={logement.title} localisation={logement.location} tags={logement.tags} host={logement.host.name} 
        image={logement.host.picture} description={logement.description} equipements={logement.equipments} rating={logement.rating}/>
        <Footer />
        </div>
    )
}

export default logement;