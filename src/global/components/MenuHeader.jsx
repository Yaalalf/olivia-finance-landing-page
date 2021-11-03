import React from 'react';
import logo from './../../assets/img/LogoLetraOenBlancoLow.png';
import './style/MenuHeader.css';

import MenuModal from './MenuModal';

class MenuHeader extends React.Component
{
    state={
        displayNone: 'DisplayNone'
    };

    constructor(props) 
    {
        super(props);
        this.root = React.createRef();
        this.menuModal = React.createRef();
    }

    getRoot()
    {
        return this.root.current;
    }

    render()
    {
        return (
            <header ref={this.root} className="MenuHeader">
                <img className="Logo" src={logo} alt="Logo de Olivia finance en blanco"/>
                <button className="Menu" onClick={this.onClick}></button>
                <MenuModal ref={this.menuModal} className={this.state.displayNone} /> 
            </header>
        );
    }

    onClick = ()=>{
        this.menuModal.current.getRoot().classList.remove("DisplayNone");
        this.menuModal.current.getRoot().classList.add("ShowMenu");
        this.menuModal.current.getRoot().classList.remove("HideMenu");

        document.querySelector('body').classList.add("OverflowHidden")

    }
}

export default MenuHeader;