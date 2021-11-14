import React from 'react';
import FeatureCard from './components/FeatureCard';

import './style/SectionFeatures.css';

import Seguridad from './../../assets/icons/Seguridad.svg';
import Rapidez from './../../assets/icons/Rapidez.svg';
import Confiabilidad from './../../assets/icons/Confiabilidad.svg';


class SectionFeatures extends React.Component
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
        return(
            <section id="SectionFeatures" ref={this.root} className="SectionFeatures Hide">
                <div className="FloatingIcon"></div>
                <h2>Las caracteristicas que nos definen</h2>
                <div className="CardContainer">
                    <FeatureCard src={Seguridad} alt="Un escudo sìmbolo de seguridad">
                        <h3>Seguridad :</h3>
                        <p>Utilizamos plataformas de pago reconocidas por su efectividad para 
                            asegurar que su envio llegue sin empedimentos, en caso de 
                            perdida no se preocupe tendra el 100% del reembolso </p>
                    </FeatureCard>
                    <FeatureCard src={Rapidez} alt="Un reloj hiendo a toda velocidad">
                        <h3>Rapidez :</h3>
                        <p>Enviar dinero a Cuba nunca habia sido tan rapido, tenemos tiempo de entrega de 
                            minutos para remesas a tarjetas de banco en la isla y demora de menos de 3 dias 
                            para entregas directas</p>
                    </FeatureCard>
                    <FeatureCard src={Confiabilidad} alt="Apretòn de manos">
                        <h3>Confiabilidad :</h3>
                        <p>Llevamos tiempo en este negocio y nuestros clientes habituales dan testimonio 
                            de nuestra efectividad. Nuestro servicio de atencion al cliente esta activo 
                            en todo momento para tenerlo al tanto del estado de su envio </p>
                    </FeatureCard>
                </div>
            </section>
        );
    }

}

export default SectionFeatures;