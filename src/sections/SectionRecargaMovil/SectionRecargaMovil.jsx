import React from 'react';
import Card from './components/Card';

import LeafBackground from './../../global/components/LeafBackground';
import './style/SectionRecargaMovil.css'


class SectionRecargaMovil extends React.Component
{
    state={
        matches : matchMedia('(min-width : 1024px)')
    };
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
            <section id="SectionRecargaMovil" ref={this.root} className="SectionRecargaMovil Hide">
                <div className="FloatingIcon"></div>
                <div className="ContentContainer">
                <h2>Recarga Movil</h2>
                <p>Recargue el saldo de sus familiares y amigos en la isla, todo con saldo principal</p>
                </div>
                <Card />
                {(this.state.matches) ? <LeafBackground /> : ""}
            </section>
        );
    }

    componentDidMount()
    {
        window.addEventListener("resize",this.onResizeRecargaMovil);
    }

    componentWillUnmount()
    {
        window.removeEventListener("resize",this.onResizeRecargaMovil);

    }
    onResizeRecargaMovil = (e)=>{
        this.setState({matches : matchMedia("(min-width : 1024px)").matches })
    }

}

export default SectionRecargaMovil;