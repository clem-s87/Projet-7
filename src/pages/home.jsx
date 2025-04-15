import Header from '../components/header.jsx';
import Banner from '../components/banner.jsx';
import Gallery from '../components/gallery.jsx';
import Footer from '../components/footer.jsx';

import image1 from '../assets/images/IMG.png';


function home () {
    return (
        <div className='home'>
        <Header />
        <Banner imageUrl={image1}>
        <h1 className='banniere_text'>Chez vous,<span className='banniere_text_mobile'> partout et ailleurs</span></h1>
        </Banner>
        <Gallery />
        <Footer />
        </div>
    )
}

export default home;