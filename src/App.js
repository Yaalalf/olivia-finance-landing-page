import './App.css';
import './global/style/GlobalAnimations.css';

import React from 'react';
import {BrowserRouter , Route , Routes} from 'react-router-dom';

import MenuHeader from './global/components/MenuHeader';
import SectionFooter from './sections/SectionFooter/SectionFooter';

import Home from './pages/Home';
import EnvioRemesas from './pages/EnvioRemesas';

class App extends React.Component 
{

  state = {anchor:{
                    SectionRecargaMovil : false,
                    SectionTasaCambio : false
                  }
          };

  constructor(props)
  {
    super(props);
    this.menuHeader = React.createRef();
    this.home = React.createRef();
    this.product = React.createRef();
    this.sectionFooter = React.createRef();
  }

  render()
  {
    return (
      <div className="App">
        <BrowserRouter>
          <MenuHeader ref={this.menuHeader} handleAnchor={this.handleAnchor}/>
          <Routes>
            <Route exact  path="/" element={<Home ref={this.home} handleAnchor={this.handleAnchor} />} />
            <Route exact path="/EnvioRemesas" element={<EnvioRemesas ref={this.product} />} />
          </Routes>
          <SectionFooter ref={this.sectionFooter} handleAnchor={this.handleAnchor} />
        </BrowserRouter>
        
      </div>
    );
  } 

  handleAnchor = (e)=>{

        setTimeout(()=>{
          
          if(e.target.id === "TasaCambio")
        {
          this.home.current.getRoot().sectionTasaCambio.scrollIntoView();
        }
        if(e.target.id === "RecargaMovil")
        {
          this.home.current.getRoot().sectionRecargaMovil.scrollIntoView();
        }

        if(e.target.id === "Intro")
        {
          this.home.current.getRoot().sectionIntro.scrollIntoView();
        }

        if(e.target.id === "Product")
        {
          this.product.current.getRoot().sectionProductRemesas.scrollIntoView();
        }

      },0);
        

  }

  componentDidMount()
  {
      let intersectionObserver = new IntersectionObserver(this.onObserver,{threshold: 0.25});

      intersectionObserver.observe(this.menuHeader.current.getRoot());
      intersectionObserver.observe(this.sectionFooter.current.getRoot());
  }

  onObserver = (entries,observer)=>{

    let intersecting = entries.filter((elem)=>elem.isIntersecting);
    let notIntersecting = entries.filter((elem)=>!(elem.isIntersecting));
    if(intersecting)
    {
      intersecting.forEach(element => {
          element.target.classList.add('Show');
          observer.unobserve(element.target);
      });
    }
    if(notIntersecting)
    {
      notIntersecting.forEach(element => {
        element.target.classList.remove('Show');
      });
    }
  }

}

export default App;
