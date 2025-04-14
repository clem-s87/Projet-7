import etoileP from '../assets/images/etoile-pleine.png';
import etoileV from '../assets/images/etoile-vide.png';
import '../style/rating.css';


function Rating ({note}) {

    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        stars.push(
          <img
            key={i}
            src={i <= note ? etoileP : etoileV}
            alt={i <= note ? 'Étoile pleine' : 'Étoile vide'}
            className="star"
          />
        );
      }
      return <div className="rating">{stars}</div>;
};

export default Rating;