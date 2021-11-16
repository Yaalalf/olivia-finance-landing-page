import React from 'react';
import './style/SectionFooter.css';

import { Link } from 'react-router-dom';

class SectionFooter extends React.Component
{
    constructor(props) 
    {
        super(props);

        this.state = {matches: matchMedia("(min-width : 426px)").matches };
        this.root = React.createRef();
    }
    
    getRoot()
    {
        return this.root.current;
    }

    onResize = (e)=>{
        this.setState({matches : matchMedia("(min-width : 426px)").matches })
    }

    render()
    {
        return (
            <footer id="SectionFooter" ref={this.root} className="SectionFooter Hide" onClick={this.props.handleAnchor} >
                <ul>
                <li><Link id="Intro" to="/" onClick={this.onClickLink}>Home</Link></li>
                    <li><Link id="Product" to="/EnvioRemesas" onClick={this.onClickLink}>Envio de Remesas</Link></li>
                    <li><Link id="TasaCambio" to="/" onClick={this.onClickLink}>Tasa de Cambio</Link></li>
                    <li><Link id="RecargaMovil" to="/" onClick={this.onClickLink}>Recarga Movil</Link></li>
                </ul>  

                <p>{(!this.state.matches) ? <React.Fragment>Olivia Finance <br /> Todos los derechos reservados</React.Fragment>:<React.Fragment>Olivia Finance Todos los derechos reservados</React.Fragment>}</p>
            </footer>
        );
    }

    componentDidMount()
    {
        window.addEventListener("resize",this.onResize);
    }
}

export default SectionFooter;