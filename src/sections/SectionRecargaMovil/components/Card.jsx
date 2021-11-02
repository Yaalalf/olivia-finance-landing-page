import React from 'react';

import './style/Card.css'

class Card extends React.Component
{
    render()
    {
        return (
            <div className="Card">
                <h3>Doble Recarga</h3>
                <div className="Content">
                <p>Por 25 EUR</p>
                <p>Recibe</p>
                <p>1250 de</p>
                <p>saldo principal</p>
                </div>
                <div className="BackgroundImg"></div>
                <a href="./#">Ir</a>
            </div>
        );
    }
}

export default Card;