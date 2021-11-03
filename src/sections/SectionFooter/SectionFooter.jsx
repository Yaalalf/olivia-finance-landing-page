import React from 'react';
import './style/SectionFooter.css';

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
            <footer id="SectionFooter" ref={this.root} className="SectionFooter Hide">
                <ul>
                    <li><a href="./#SectionIntro">Home</a></li>
                    <li><a href="./#">Envio de Remesas</a></li>
                    <li><a href="./#SectionRecargaMovil">Recarga Movil</a></li>
                    <li><a href="./#SectionTasaCambio">Tasa de Cambio</a></li>
                </ul>  

                <p>Olivia Finance <br /> Todos los derechos reservados</p>
            </footer>
        );
    }
}

export default SectionFooter;