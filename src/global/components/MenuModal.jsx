import React from 'react';
import { Link } from 'react-router-dom';

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
            <nav ref={this.root} className={`MenuModal ${this.props.className}`} onClick={this.props.handleAnchor}>
                <button onClick={this.onClickButton}>X</button>
                <ul>
                    <li><Link id="Intro" to="/" onClick={this.onClickLink}>Home</Link></li>
                    <li><Link id="Product" to="EnvioRemesas" onClick={this.onClickLink}>Envio de Remesas</Link></li>
                    <li><Link id="TasaCambio" to="/" onClick={this.onClickLink}>Tasa de Cambio</Link></li>
                    <li><Link id="RecargaMovil" to="/" onClick={this.onClickLink}>Recarga Movil</Link></li>
                </ul>
            </nav>
        );
    }

    componentWillUnmount()
    {
        clearTimeout(this.idTimeout);
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
        this.idTimeout = setTimeout(()=>{this.root.current.classList.add('DisplayNone')},500) 

        document.querySelector('body').classList.remove("OverflowHidden");
    }

}

export default MenuModal;