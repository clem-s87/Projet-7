import Header from '../components/header.jsx';
import Banner from '../components/banner.jsx';
import Gallery from '../components/gallery.jsx';

function home () {
    return (
        <div className='home'>
        <Header />
        <Banner />
        <Gallery />
        </div>
    )
}

export default home;