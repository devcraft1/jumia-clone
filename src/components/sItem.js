import React, {Component} from 'react'
import './last.css';

function SlideItem(props) {
    return (
      <div className="item-slide">
        <h2>{props.image}</h2>
      </div>
    );
  }

  export default SlideItem;