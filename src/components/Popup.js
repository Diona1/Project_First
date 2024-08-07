import React, { useState } from 'react';
import "./User.scss";

const Popup = () => {
    const [popup, setPopup] = useState(false);

    const showPopup = () => {
        setPopup(true);
    }

    const closePopup = () => {
        setPopup(false);
    }

    return (
        <div className='popup'>
            <button type='button' onClick={showPopup}>Show Popup</button>
            {popup && (
                <>
                    <div className='backdrop' onClick={closePopup}></div>
                    <div className='card'>
                        <h1>Popup</h1>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Popup;
