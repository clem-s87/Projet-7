import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import Banner from '../components/banner.jsx';

import image2 from '../assets/images/photo-about.png';

function about () {
    return (
        <div>
        <Header />
        <Banner imageUrl={image2}></Banner>
        <Footer />
        </div>
    )
}

export default about;