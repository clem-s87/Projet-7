import Header from '../components/header.jsx';
import Banner from '../components/banner.jsx';
import Gallery from '../components/gallery.jsx';
import Footer from '../components/footer.jsx';

function home () {
    return (
        <div className='home'>
        <Header />
        <Banner />
        <Gallery />
        <Footer />
        </div>
    )
}

export default home;