import Cart from './cart.jsx';
import Data from '../assets/data.json';
import { Link } from "react-router-dom";


function gallery (logement) {
    return (
        <div className='gallery'>
            {Data.map((logement) => {
                return (
                    <article key={logement.id}>
                <Link to={'/logement/:id'}>
                    <Cart image={logement.cover} title= {logement.title} />
                </Link>
                    </article>
                    
                )
            }
            )}   
        </div>
    )
}

export default gallery;