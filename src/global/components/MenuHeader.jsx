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

        this.lastKnowScrollPosition = 0;
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
                <MenuModal ref={this.menuModal} className={this.state.displayNone} handleAnchor={this.props.handleAnchor} /> 
            </header>
        );
    }

    componentDidMount()
    {
        document.onscroll = this.onScroll;
    }

    onClick = ()=>{
        this.menuModal.current.getRoot().classList.remove("DisplayNone");
        this.menuModal.current.getRoot().classList.add("ShowMenu");
        this.menuModal.current.getRoot().classList.remove("HideMenu");

        document.querySelector('body').classList.add("OverflowHidden")

    }

    
    onScroll = (e)=>{
        let newScrollPosition = e.path[1].scrollY;
        let menu = this.getRoot();
        
        if(this.isChangeScrollOrientation(newScrollPosition))
        {
        if(!menu.classList.contains("OutMenu"))
        {
            window.requestAnimationFrame(()=>{
                menu.classList.add("OutMenu");
                menu.classList.remove("InMenu");
            });
        }
        }
        else
        {
        if(!menu.classList.contains("InMenu"))
        {
            window.requestAnimationFrame(()=>{
                menu.classList.add("InMenu");
                menu.classList.remove("OutMenu");
            });
        }
        }

        this.lastKnowScrollPosition = newScrollPosition;
  }

  isChangeScrollOrientation(newScrollPosition)
  {
    let differ = this.lastKnowScrollPosition - newScrollPosition;

    if(differ < 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}

export default MenuHeader;