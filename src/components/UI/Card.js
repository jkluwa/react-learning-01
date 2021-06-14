import React from 'react';
import './Card.css';

const Card = (props) => {
    const cards = "card " + props.className;
    return (
        
        <div className={cards}>{props.children}</div>
    );
}

export default Card;