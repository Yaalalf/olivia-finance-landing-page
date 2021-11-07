import React from 'react';
import './style/SectionFooter.css';

import { Link } from 'react-router-dom';

class SectionFooter extends React.Component
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
            <footer id="SectionFooter" ref={this.root} className="SectionFooter Hide" onClick={this.props.handleAnchor}>
                <ul>
                <li><Link id="Intro" to="/" onClick={this.onClickLink}>Home</Link></li>
                    <li><Link id="Product" to="EnvioRemesas" onClick={this.onClickLink}>Envio de Remesas</Link></li>
                    <li><Link id="TasaCambio" to="/" onClick={this.onClickLink}>Tasa de Cambio</Link></li>
                    <li><Link id="RecargaMovil" to="/" onClick={this.onClickLink}>Recarga Movil</Link></li>
                </ul>  

                <p>Olivia Finance <br /> Todos los derechos reservados</p>
            </footer>
        );
    }
}

export default SectionFooter;