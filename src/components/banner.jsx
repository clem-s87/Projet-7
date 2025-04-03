import React from 'react';
import '../style/banner.css';


const Banner = ({ imageUrl, children }) => {
    return (
      <div className="banniere" style={{ backgroundImage: `url(${imageUrl})`}}>
        <div className="banniere_text"> 
        {children}
        </div>
      </div>
    );
  };
  
  
  export default Banner;