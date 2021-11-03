import React from 'react';
import Calculator from './components/Calculator';
import './style/SectionTasaCambio.css';


class SectionTasaCambio extends React.Component
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
            <section id="SectionTasaCambio" ref={this.root} className="SectionTasaCambio Hide">
                <div className="Hoja"></div>
                <div className="Content">
                    <div className="ContentHeader">
                        <h2><span></span>Tasa de Cambio</h2> 
                        <p>Tenemos nuestra propia tasa de cambio, ajustada para brindarle el mejor servicio. Sin comisiones, así es no le cobramos comisión.</p>                       
                    </div>
                    <div className="ContentTasaCambio">
                        <p>1 EUR<span> </span>40cup</p>
                        <p>1 USD<span> </span>35cup</p>
                    </div>
                </div>
                <Calculator />
            </section>
        );
    }
}

export default SectionTasaCambio;