import React from 'react';
import logo from './../../../assets/img/LogoLetraOenBlancoLow.png';
import './style/MenuHeader.css';

class MenuHeader extends React.Component
{
    render()
    {
        return (
            <header className="MenuHeader">
                <img className="Logo" src={logo} alt="Logo de Olivia finance en blanco"/>
                <button className="Menu"></button>
            </header>
        );
    }
}

export default MenuHeader;