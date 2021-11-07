import React from 'react';

import ActionCardSplitter from './components/ActionCardSplitter';
import LeafBackground from '../../global/components/LeafBackground';

import OliviaFinance from './../../assets/img/LogoOliviaFinanceLow.png';


import './style/SectionIntro.css'

class SectionIntro extends React.Component
{
    constructor(props) {
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
            <section id="SectionIntro" ref={this.root} className="SectionIntro Hide">
                <div className="LogoContainer">
                    <img className="Foto" src={OliviaFinance} alt="Logo de la agencia" />
                    <h1>Servicio de remesas <br /> a Cuba</h1>
                </div>
                
                <LeafBackground className="LeafRotateX" />

                <ActionCardSplitter />
                
                <LeafBackground className="LeafRotateY" />

            </section>
        );
    }

    
}

export default SectionIntro;