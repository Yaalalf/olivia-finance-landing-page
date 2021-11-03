import React from 'react';

import ActionCardSplitter from './components/ActionCardSplitter';

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
                <img className="Foto" src={OliviaFinance} alt="Logo de la agencia" />
                
                <div className="Background"></div>

                <ActionCardSplitter />
                
                <div className="Background1"></div>
            </section>
        );
    }

    
}

export default SectionIntro;