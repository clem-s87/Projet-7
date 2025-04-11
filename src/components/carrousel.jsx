import React, { useState } from 'react';
import ArrowG from '../assets/images/flechegche.png';
import ArrowD from '../assets/images/flechedrte.png';
import '../style/carrousel.css';

function carrousel ({ pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carrousel">
            <div className="carrousel_images">
                <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            </div>
            {pictures.length > 1 && (
                <>
            <div className="carrousel-pagination">
                <p>
                    {currentIndex + 1} / {pictures.length}
                </p>
            </div>
            <div className="carrousel_buttons">
                <img src={ArrowG} className="carrousel_buttonG" onClick={goToPrevious}> 
                </img>
                <img src={ArrowD} className="carrousel_buttonD" onClick={goToNext}>
                </img>
            </div>
            </>
            )}
        </div>
    );
};



export default carrousel; 