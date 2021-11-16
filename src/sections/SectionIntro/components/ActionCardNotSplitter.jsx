import React from 'react';

import ActionCard from './ActionCard';
import { Link } from 'react-router-dom';

import './style/ActionCardSplitter.css';

class ActionCardNotSplitter extends React.Component
{

    render()
    {
        return ( 
        <div className="ActionCardSplitter">
            
            <ActionCard className={`ActionCard First `}>
                <h2>Envió de <span>remesas</span> a <span>Cuba</span></h2>
                <ul>
                    <li>desde cualquier parte del mundo</li>
                    <li>maxima tasa de cambio</li>
                    <li>comision minima</li>
                </ul>

                <Link id="Product" className="LinkButton" to="EnvioRemesas">Conocer más</Link>
            </ActionCard>

            <ActionCard className={`ActionCard Second `}>
                <h2>Recarga de <span>saldo</span> <span>móvil</span></h2>
                <ul>
                    <li>disponible todo el año</li>
                    <li>todo saldo principal</li>
                    <li>sin caducidad</li>
                </ul>
                
                <Link id="RecargaMovil" className="LinkButton" to="/">Conocer más</Link>

            </ActionCard>
        </div> );
    }
    
}

export default ActionCardNotSplitter;