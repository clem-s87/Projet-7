import Cart from './cart.jsx';
import Data from '../assets/data.json';


function gallery (logement) {
    return (
        <div className='gallery'>
            {Data.map((logement) => {
                return (
                    <article key={logement.id}>
                <Cart image={logement.cover} title= {logement.title} />
                    </article>
                    
                )
            }
            )}   
        </div>
    )
}

export default gallery;