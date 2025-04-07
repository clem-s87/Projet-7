import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import Banner from '../components/banner.jsx';
import Collapse from '../components/collapse.jsx';
import '../style/about.css';

import image2 from '../assets/images/photo-about.png';

function about () {
    return (
        <div>
        <Header />
        <Banner imageUrl={image2}></Banner>
        <div className='about_collapse'>
            <Collapse title={"Fiabilité"} content={"Les annonces postées sur Kasa gzrentissent une fiabilité totale. Les photos sont conformes aux logements, toutes les informations sont régulièrement vérifiées par nos équipes."}/>
            <Collapse title={"Respect"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
            <Collapse title={"Service"} content={"La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intération, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et bienveillance."}/>
            <Collapse title={"Sécurité"} content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domesetique pour nos hôtes. "}/>
        </div>
        <Footer />
        </div>
    )
}

export default about;