import React, { Component } from 'react';
import DisplayCard from './DisplayCard';
import './CardDisplayContainer.css';
// import DisplayCard from './DisplayCard';

const CardDisplayContainer = () => {
    return(
        <div className="cards-container">
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
        </div>
    )
}

export default CardDisplayContainer;