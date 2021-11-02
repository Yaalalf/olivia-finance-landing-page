import './App.css';
import './GlobalAnimations.css';
import React from 'react';
import SectionIntro from './sections/SectionIntro/SectionIntro';
import SectionBrief from './sections/SectionBrief/SectionBrief';
import SectionFeatures from './sections/SectionFeatures/SectionFeatures';
import SectionTasaCambio from './sections/SectionTasaCambio/SectionTasaCambio';
import SectionRecargaMovil from './sections/SectionRecargaMovil/SectionRecargaMovil';
import SectionSocialMedia from './sections/SectionSocialMedia/SectionSocialMedia';

class App extends React.Component 
{

  constructor(props) {
    super(props);
    this.sectionIntro = React.createRef();
    this.sectionBrief = React.createRef();
    this.sectionFeatures = React.createRef();
    this.sectionTasaCambio = React.createRef();
  }

  render()
  {
    return (
      <div className="App">
        <SectionIntro ref={this.sectionIntro} />
        <SectionBrief ref={this.sectionBrief} />
        <SectionFeatures ref={this.sectionFeatures}  />
        <SectionTasaCambio ref={this.sectionTasaCambio} />
        <SectionRecargaMovil />
        <SectionSocialMedia />
      </div>
    );
  } 

  OnObserver = (entries,observer)=>{
      console.log(entries);

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
      console.log("Intersecting "+ intersecting);
      console.log("Not intersecting " + notIntersecting);
    }
}

  componentDidMount()
  {
      let intersectionObserver = new IntersectionObserver(this.OnObserver,{threshold: 0.25});
      intersectionObserver.observe(this.sectionIntro.current.getRoot());
      intersectionObserver.observe(this.sectionBrief.current.getRoot());
      intersectionObserver.observe(this.sectionFeatures.current.getRoot());
      intersectionObserver.observe(this.sectionTasaCambio.current.getRoot());
  }

}

export default App;
