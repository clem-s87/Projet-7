import data from '../assets/data.json';

function cart (image, title) {

    return (
        <div className='carts'>
            <img src={image} alt={title} className='carts_img'></img>
            <h2 className='carts_img_text'>{title}</h2>
        </div>
    )
};

export default cart;