import React, { useState } from 'react';
import Arrow from '../assets/images/Vector.png';
import '../style/collapse.css';


function collapse ({title, content}) {

    const [IsOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!IsOpen);
    };

    return (
        <div className='collapse_container'>
            <div className='collapse_content_close'>
                <h2>{title}</h2>
                <div onClick={toggleCollapse} className='container_arrow'>
                    <span>
                    <img
                            src={Arrow} 
                            alt='Chevron'
                            className={IsOpen ? 'rotate' : ''} 
                        />
                    </span>
                </div>
            </div>
            
{/* If collapse is open content appear */}
            <div className={`collapse_content_open ${IsOpen ? 'open' : ''}`}>
                <div className='collapse_text'>{content}</div>
            </div>
        </div>
        
    )

};

export default collapse;