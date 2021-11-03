import './App.css';
import './global/style/GlobalAnimations.css';
import React from 'react';

import MenuHeader from './global/components/MenuHeader';
import SectionIntro from './sections/SectionIntro/SectionIntro';
import SectionBrief from './sections/SectionBrief/SectionBrief';
import SectionFeatures from './sections/SectionFeatures/SectionFeatures';
import SectionTasaCambio from './sections/SectionTasaCambio/SectionTasaCambio';
import SectionRecargaMovil from './sections/SectionRecargaMovil/SectionRecargaMovil';
import SectionSocialMedia from './sections/SectionSocialMedia/SectionSocialMedia';
import SectionFooter from './sections/SectionFooter/SectionFooter';

class App extends React.Component 
{

  constructor(props) {

    super(props);

    this.menuHeader = React.createRef();
    this.sectionIntro = React.createRef();
    this.sectionBrief = React.createRef();
    this.sectionFeatures = React.createRef();
    this.sectionTasaCambio = React.createRef();
    this.sectionRecargaMovil = React.createRef();
    this.sectionSocialMedia = React.createRef();
    this.sectionFooter = React.createRef();

    this.lastKnowScrollPosition = 0;
  }

  render()
  {
    return (
      <div className="App">
        <MenuHeader ref={this.menuHeader}/>
        <SectionIntro ref={this.sectionIntro} />
        <SectionBrief ref={this.sectionBrief} />
        <SectionFeatures ref={this.sectionFeatures}  />
        <SectionTasaCambio ref={this.sectionTasaCambio} />
        <SectionRecargaMovil ref={this.sectionRecargaMovil} />
        <SectionSocialMedia ref={this.sectionSocialMedia} />
        <SectionFooter ref={this.sectionFooter} />
      </div>
    );
  } 

  componentDidMount()
  {
      let intersectionObserver = new IntersectionObserver(this.onObserver,{threshold: 0.25});

      intersectionObserver.observe(this.menuHeader.current.getRoot());
      intersectionObserver.observe(this.sectionIntro.current.getRoot());
      intersectionObserver.observe(this.sectionBrief.current.getRoot());
      intersectionObserver.observe(this.sectionFeatures.current.getRoot());
      intersectionObserver.observe(this.sectionTasaCambio.current.getRoot());
      intersectionObserver.observe(this.sectionRecargaMovil.current.getRoot());
      intersectionObserver.observe(this.sectionSocialMedia.current.getRoot());
      intersectionObserver.observe(this.sectionFooter.current.getRoot());

      document.onscroll = this.onScroll;
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

  onScroll = (e)=>{
    let newScrollPosition = e.path[1].scrollY;
    let menu = this.menuHeader.current.getRoot();
    
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

export default App;
