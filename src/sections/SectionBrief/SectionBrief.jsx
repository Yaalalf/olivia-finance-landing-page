import React from 'react';
import './style/SectionBrief.css';

import LeafSingleBackground from '../../global/components/LeafSingleBackground';

class SectionBrief extends React.Component
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
            <section id="SectionBrief" ref={this.root} className="SectionBrief Hide">
                    <div className="Brief">
                        <h2>Envie su remesa a Cuba al instante</h2>
                        <p>Olivia Finance es la mejor vía de enviar dinero a Cuba, de una forma rápida y segura.
                            Enviar remesas a Cuba se ha convertido de un proceso díficil y lleno de complicaciones a un camino seguro gracias a nuestros servicios. 
                            Ahora podrá ayudar a sus familiares y amigos en la isla sin complicación alguna.
                            En Olivia Finance ponemos a su disposición nuestro servicio para enviar dinero a Cuba desde cualquier parte del mundo.
                            Un servicio de calidad con el que podrá ayudar a sus familiares en Cuba.</p>
                    </div>
                    
                    <div className="Horario">
                        <h2>Horario</h2>
                        <p>De lunes a viernes: 8:00am/ 20:00pm</p>
                    </div>

                    <LeafSingleBackground />
            </section>
        );
    }
}

export default SectionBrief;