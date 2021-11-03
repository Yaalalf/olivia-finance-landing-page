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
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </FeatureCard>
                    <FeatureCard src={Rapidez} alt="Un reloj hiendo a toda velocidad">
                        <h3>Rapidez :</h3>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </FeatureCard>
                    <FeatureCard src={Confiabilidad} alt="Apretòn de manos">
                        <h3>Confiabilidad :</h3>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </FeatureCard>
                </div>
            </section>
        );
    }

}

export default SectionFeatures;