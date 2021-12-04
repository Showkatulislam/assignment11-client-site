import React from 'react';
import Event from './events/Event';


import './style/Section1.css'
const Section2 = () => {
    return (
        <div>
        <div className="features">
            <h1>external  country trips</h1>
        </div>
        <div className="events-container">
           <Event></Event>
        </div>
        </div>
    );
};

export default Section2;