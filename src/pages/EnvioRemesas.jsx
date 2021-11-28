import React from 'react';

import SectionProductRemesas from '../sections/SectionProductRemesas/SectionProductRemesas';


class EnvioRemesas extends React.Component
{
  constructor(props) {
    
    super(props);

    this.sectionProductRemesas = React.createRef();

  }

getRoot()
{
  return {
      sectionProductRemesas : this.sectionProductRemesas.current.getRoot()
  }
}

    render()
    {
        return (
                <main className="EnvioRemesas">
                    <SectionProductRemesas ref={this.sectionProductRemesas} />
                </main>
        );
    }

    componentDidMount()
  {
      let intersectionObserver = new IntersectionObserver(this.onObserver,{threshold: 0});

      intersectionObserver.observe(this.sectionProductRemesas.current.getRoot());
  }

  onObserver = (entries,observer)=>{

    let intersecting = entries.filter((elem)=>elem.isIntersecting);
    let notIntersecting = entries.filter((elem)=>!(elem.isIntersecting));

    if(intersecting)
    {

      console.log("intersecte");
      console.log(intersecting);
      intersecting.forEach(element => {
          element.target.classList.add('Show');
          observer.unobserve(element.target);
      });
    }
    if(notIntersecting)
    {
      console.log(notIntersecting);

      notIntersecting.forEach(element => {
        element.target.classList.remove('Show');
      });
    }
  }


}

export default EnvioRemesas;