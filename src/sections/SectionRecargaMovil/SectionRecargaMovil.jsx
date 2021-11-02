import React from 'react';
import Card from './components/Card';

import './style/SectionRecargaMovil.css'

class SectionRecargaMovil extends React.Component
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
            <section ref={this.root} id="Movil" className="SectionRecargaMovil Hide">
                <div className="FloatingIcon"></div>
                <h2>Recarga Movil</h2>
                <p>Recargue el saldo de sus familiares y amigos en la isla, todo con saldo principal</p>
                <Card />

            </section>
        );
    }
}

export default SectionRecargaMovil;