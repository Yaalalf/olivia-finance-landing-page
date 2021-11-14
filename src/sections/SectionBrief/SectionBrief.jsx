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
                        <p></p>
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