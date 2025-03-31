import Header from '../components/header.jsx';
import Banner from '../components/banner.jsx';
import Cart from '../components/cart.jsx';

function home () {
    return (
        <div className='home'>
        <Header />
        <Banner />
        <Cart />
        </div>
    )
}

export default home;