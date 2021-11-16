import React from 'react';
import { Link } from 'react-router-dom';

import './style/MenuLineal.css';

class MenuLineal extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.root = React.createRef();
    }

    getRoot()
    {
        return this.root.current;
    }

    render()
    {
        return (
            <nav ref={this.root} className="MenuLineal" onClick={this.props.handleAnchor}>
                <ul>
                    <li><Link id="Intro" to="/" >Home</Link></li>
                    <li><Link id="Product" to="/EnvioRemesas" >Envio de Remesas</Link></li>
                    <li><Link id="TasaCambio" to="/" >Tasa de Cambio</Link></li>
                    <li><Link id="RecargaMovil" to="/" >Recarga Movil</Link></li>
                </ul>
            </nav>
        );
    }

    componentWillUnmount()
    {
        clearTimeout(this.idTimeout);
    }

}

export default MenuLineal;