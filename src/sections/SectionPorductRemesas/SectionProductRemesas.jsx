import React from 'react';

import LinkButtonExtern from '../../global/components/LinkButtonExtern';
import LeafBackground from '../../global/components/LeafBackground';
import ProductList from './components/ProductList';

import './style/SectionProductRemesas.css';

class SectionProductRemesas extends React.Component
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
            <section ref={this.root} className="SectionProductRemesas">
                <div className="HeaderContent">
                    <LeafBackground />
                    <h2>Opciones de Envío</h2>
                </div>

                <p>Escoja una de nuestras opciones predefinidas o contactenos para un envio personalizado</p>

                <LinkButtonExtern href="https://wa.me/c/34643629160" >Contactar</LinkButtonExtern>

                <ProductList />

            </section>
        );
    }
}

export default SectionProductRemesas;