import React from 'react';

import './style/SectionSocialMedia.css';

import Instagram from './../../assets/img/InstragramLogo.png';
import Whatsapp from './../../assets/icons/WhatsappIcon.svg';
import Facebook from './../../assets/icons/FacebookIcon.svg';




class SectionSocialMedia extends React.Component
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
            <section id="SectionSocialMedia" ref={this.root} className="SectionSocialMedia Hide">
                <h2>Contactenos</h2>
                <p>Contacte con nosotros para mas información o visite nuestras paginas en redes sociales</p>
                <div className="Background"></div>
                <div className="Container">
                <div>
                    <img src={Instagram} alt="" />
                    <a href="/#">Instagram</a>
                </div>
                <div>
                    <img src={Whatsapp} alt="" />
                    <a href="/#">Whatsapp</a>
                </div>
                <div>
                    <img src={Facebook} alt="" />
                    <a href="/#">Facebook</a>
                </div>
                </div>
            </section>

        );
    }
} 

export default SectionSocialMedia;