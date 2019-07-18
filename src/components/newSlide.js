import React, {Component} from 'react'
import Indicators from './second';
import SlideItem from './sItem';
// import listItems from './listItems';
import './last.css';

const listItems = [
    {'image':<a href="#"><img className="rawimg" src="/pics/washingmachine_slider.jpg"/></a> },
    {"image":<a href="#"><img className="rawimg"src="/pics/slider_fo-min.jpg"/></a>},
    {"image":<a href="#"><img className="rawimg" src="/pics/Slider-min.jpg"/></a>},
    {'image': <a href="https://www.google.com"><img className="rawimg"src='/pics/sliderTV.jpg' /></a>},
    {'image': <a href="#"><img className="rawimg"src='/pics/sliderTV.jpg' /></a>},
  ];


class Slides extends React.Component {
    constructor(props) {
       super(props);
      this.state = {         
           slideshow: props.slide,         
           slideIndex: 0
      };
      this.currentIndex = 0;
      this.pause = false;
    }
     
    componentDidMount() {
      var that = this;
      this.timeout = setTimeout(function () {
          that.goTo('auto')
        }, 3000);    
    }
    
    componentDidUpdate() {
      var that = this;
      if(this.pause === true) {
        clearInterval(this.timeout);
        this.timePause = setTimeout(function(){
          clearInterval(this.timePause);        
        }, 8000);
        this.pause = false;
      }         
      this.timeout = setTimeout(function () {
        that.goTo('auto')
      }, 3000);
      
    }
      
    componentWillUnmount() {
      clearInterval(this.timeout);
    }
    
    goTo = (direction) => { 
        let index = 0;
        switch(direction) {
          case 'auto':
            index = this.currentIndex + 1;
            this.currentIndex = index >= listItems.length ? 0 : index;          
          break;
          case 'prev':
            index = this.currentIndex - 1;
            this.currentIndex = index < 0 ? listItems.length - 1 : index;
            this.pause = true;
          break;
          case 'next':
            index = this.currentIndex + 1;
            this.currentIndex = index >= listItems.length ? 0 : index;
            this.pause = true;
          break;
          default:
            this.currentIndex = direction;
            this.pause = true;
          break;
        }
        console.log('pause:', this.pause);
         this.setState({
           slideIndex: this.currentIndex,
           slideshow: listItems[this.currentIndex]
         });
        
    };
     
    render() {    
      return (
          <div className="biggest">
        <div className="slideshow-simple">
          <SlideItem 
            text={this.state.slideshow.text}
            image={this.state.slideshow.image}
          />   
           <Indicators 
            changeSlide={this.goTo} // function
            currentSlide={this.state.slideIndex}
            />
          </div>     
         
        </div>
      );
    }    
  }

  export default Slides;
  