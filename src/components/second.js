import React, {Component} from 'react'
import SlideItem from './sItem';
import listItems from './listItems';
import './last.css';
  
  

  const Indicators = (props) => {
    const listIndicators = listItems.map((item, index) => 
      <li id="lastli"
        key={index}
        className={props.currentSlide === index ? 'active' : ''} 
        onClick={() => props.changeSlide(index)}
      >{index + 1}</li>
    );
    return (
      <ul className="indicators">
        {listIndicators}
      </ul>
    );
  };
  
  
//   const element = <Slides slide={listItems[0]}/>;
  
//   ReactDOM.render(
//     element,
//     document.getElementById("root")
//   );

export default Indicators;
