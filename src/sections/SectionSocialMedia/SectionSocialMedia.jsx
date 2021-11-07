import React from 'react';

import './style/SectionSocialMedia.css';

import Instagram from './../../assets/img/InstragramLogo.png';
import Whatsapp from './../../assets/icons/WhatsappIcon.svg';
import Facebook from './../../assets/icons/FacebookIcon.svg';

import LeafBackground from '../../global/components/LeafBackground';



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
                <LeafBackground />
                <div className="Container">
                <div>
                    <img src={Instagram} alt="" />
                    <a href="/#">Perfil</a>
                </div>
                <div>
                    <img src={Whatsapp} alt="" />
                    <a href="https://wa.me/c/34643629160">Catalogo</a>
                </div>
                <div>
                    <img src={Facebook} alt="" />
                    <a href="/#">Pagina</a>
                </div>
                </div>
            </section>

        );
    }
} 

export default SectionSocialMedia;