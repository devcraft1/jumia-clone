import React, { Component } from 'react';
import Final from './Final';


class Grid extends Component {
       
        render() {
                return <div>
                <div className="grid">
                <p className="cartText">Featured Categories</p>
                <div className="products">
                     <div className="product">
                  <a href="https://www.google.com" target="_blank" className="cart"><img className="gridimg" src="/pics/phone.png" alt="nigerianteam" height="120"/>Mobile Phones</a>
                </div>
                <div className="product">
                  <a href="https://www.google.com" target="_blank" className="cart"><img className="gridimg" src="/pics/microwave.png" alt="nigerianteam" height="120"/>Microwave Ovens</a>
                </div>
                <div className="product">
                  <a href="https://www.google.com" target="_blank" className="cart"><img className="gridimg" src="/pics/Laptop.png" alt="nigerianteam" height="120"/>Computing</a>
                </div>
                <div className="product">
                  <a href="#" className="cart"><img className="gridimg" src="/pics/Freezer.png" alt="nigerianteam" height="120"/>Freezers</a>
                </div>
                <div className="product">
                  <a href="#" className="cart"><img className="gridimg" src="/pics/femaleshoe.png" alt="nigerianteam" height="120"/>Stilettos</a>
                </div>
                <div className="product">
                  <a href="#" className="cart"><img className="gridimg" src="/pics/Men-belt.png" alt="nigerianteam" height="120"/>Belt</a>
                </div>
                <div className="product" id="hidegrid">
                  <a href="https://www.google.com" target="_blank" className="cart"><img src="/pics/TV.png" alt="nigerianteam" height="120"/>Televisions</a>
                </div>
                <div className="product" id="hidegrid">
                  <a href="#" className="cart"><img src="/pics/Printer.png" alt="nigerianteam" height="120"/>Printers</a>
                </div>
                <div className="product" id="hidegrid">
                  <a href="https://www.google.com" target="_blank" className="cart"><img src="/pics/Rice.png" alt="nigerianteam" height="120"/>Grains&Rice</a>
                </div>
                <div className="product" id="hidegrid">
                  <a href="#" className="cart"><img src="/pics/Speakers.png" alt="nigerianteam" height="120"/>Speakers</a>
                </div>
                <div className="product" id="hidegrid">
                  <a href="#" className="cart"><img src="/pics/Female-fashion.png" alt="nigerianteam" height="120"/>Women's Fashion</a>
                </div>
                <div className="product" id="hidegrid">
                  <a href="https://www.google.com" target="_blank" className="cart"><img src="/pics/Men-Fashion.png" alt="nigerianteam" height="120"/>Men's Fashion</a>
                </div>  

                </div>
                </div>
<Final />
                </div>
        }
};
export default Grid;
