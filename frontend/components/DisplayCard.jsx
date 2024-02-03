import React, { Component } from 'react';
import './DisplayCard.css';

const DisplayCard = () => {

    return (
        <div className="display-card-container">
            <div>
                <h2>DisplayCard</h2>
            </div>
            <div className='card-header'>
                <h3>Cardheader</h3>
            </div>
            <div className="card-body">
                <h3>CardBody</h3>
            </div>
        </div>
    )
}

export default DisplayCard;