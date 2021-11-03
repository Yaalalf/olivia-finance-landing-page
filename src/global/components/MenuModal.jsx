import React from 'react';
import './style/MenuModal.css';

class MenuModal extends React.Component
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
            <nav ref={this.root} className={`MenuModal ${this.props.className}`}>
                <button onClick={this.onClickButton}>X</button>
                <ul>
                    <li><a href="./#SectionIntro" onClick={this.onClickLink}>Home</a></li>
                    <li><a href="./#" onClick={this.onClickLink}>Envio de Remesas</a></li>
                    <li><a href="./#SectionRecargaMovil" onClick={this.onClickLink}>Recarga Movil</a></li>
                    <li><a href="./#SectionTasaCambio" onClick={this.onClickLink}>Tasa de Cambio</a></li>
                </ul>
            </nav>
        );
    }

    onClickButton = ()=>{
        this.root.current.classList.add("HideMenu");
        this.root.current.classList.remove("ShowMenu");
        setTimeout(()=>{this.root.current.classList.add('DisplayNone')},500) 

        document.querySelector('body').classList.remove("OverflowHidden");
    }

    onClickLink = ()=>{
        this.root.current.classList.add("HideMenu");
        this.root.current.classList.remove("ShowMenu");
        setTimeout(()=>{this.root.current.classList.add('DisplayNone')},500) 

        document.querySelector('body').classList.remove("OverflowHidden");
    }

}

export default MenuModal;