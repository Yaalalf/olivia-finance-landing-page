import React from 'react';
import './style/SectionBrief.css';

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
            <section ref={this.root} className="SectionBrief Hide">
                    <div className="Brief">
                        <h2>Envie su remesa a Cuba al instante</h2>
                        <p>Lorem  asdkadj asd asdasd asd asd jkasdj asdk  askd asdjk sdak asdjks adjsa ksad  djas kdsajk daskdas 
                            ksk jipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt eum exercitationem corporis!</p>
                    </div>
                    
                    <div className="Horario">
                        <h2>Horario</h2>
                        <p>De lunes a viernes: 8:00am/ 20:00pm</p>
                    </div>

                    <div className="Hoja"></div>
            </section>
        );
    }
}

export default SectionBrief;