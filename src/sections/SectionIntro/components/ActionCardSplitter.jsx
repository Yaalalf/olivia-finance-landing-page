import React from 'react';

import ActionCard from './ActionCard';

import './style/ActionCardSplitter.css';

class ActionCardSplitter extends React.Component
{
    state = {
        animationFirst : '',
        animationSecond : ''
    };

    render()
    {
        return ( 
        <div className="ActionCardSplitter">
            
            <ActionCard className={`ActionCard First ${this.state.animationFirst}`}>
                <h2>Envió de <span>remesas</span> a <span>Cuba</span></h2>
                <ul>
                    <li>desde cualquier parte del mundo</li>
                    <li>maxima tasa de cambio</li>
                    <li>comision minima</li>
                </ul>
                    <a href="./#Movil">Ir</a>
            </ActionCard>

            <ActionCard className={`ActionCard Second ${this.state.animationSecond}`}>
                <h2>Recarga de <span>saldo</span> <span>móvil</span></h2>
                <ul>
                    <li>disponible todo el año</li>
                    <li>todo saldo principal</li>
                    <li>sin caducidad</li>
                </ul>
                <a href="./#">Ir</a>
            </ActionCard>

            <div className="Buttons">
                <button className="Left" onClick={this.onClickHandle} ></button>
                <button className="Right" onClick={this.onClickHandle} ></button>
            </div>
        </div> );
    }
    
    onClickHandle = (e)=>{
        console.log(e);

        if(e.target.className === "Right")
        {
            this.setState({
                animationFirst : 'goLeftAnimation',
                animationSecond : 'backRightAnimation'
            });
        }

        if(e.target.className === "Left")
        {
        
            this.setState({
                animationFirst : 'backLeftAnimation',
                animationSecond : 'goRightAnimation'
            });
        }

    }

}

export default ActionCardSplitter;