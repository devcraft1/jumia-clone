import React, { Component } from 'react';
import {NavLink, BrowserRouter} from 'react-router-dom'
import { Home, Book, MonetizationOn, AccountBalance, Sync} from '@material-ui/icons'
import './new.css';
import Land from "./Land"
import Slides from './newSlide';
import listItems from './listItems';

class Gallery extends Component {

    render() {
        return <div className="gallery">
            <div className="gal2">
                 <BrowserRouter>
                 <AccountBalance style={{ height: '20px', float: "left", marginTop: "13px" , marginLeft: '19px'}}/><div className="sidediv" style={{ marginRight: '390px' }}><a href="https://www.google.com" target="_blank"  style={{ textDecoration: 'none' }}>
<h1 style={{ fontSize: '10px', color: "orange", textAlign:"left" }}>SELL ON JUMIA</h1>
<p style={{ fontSize: '10px', color: "orange", textAlign:"left" }}>Millions of monthly visitors</p></a></div>

<MonetizationOn style={{ height: '20px', float: "left", marginTop: "5px", marginLeft: '19px' }}/><div className="sidediv" style={{ marginRight: '390px'}}><NavLink  style={{ textDecoration: 'none' }}><h1 style={{ fontSize: '10px', color: "grey", textAlign:"left" }}>PAY ON DELIVERY</h1>
<p style={{ fontSize: '10px', color: "grey", textAlign:"left" }}>After checking the product</p></NavLink></div>

<Sync style={{ height: '20px', float: "left", marginTop: "2px", marginLeft: '19px' }}/><div className="sidediv" style={{ marginRight: '395px' }}><NavLink style={{ textDecoration: 'none' }}><h1 style={{ fontSize: '10px', color: "grey", textAlign:"left"}}>EASY RETURN</h1>
<p style={{ fontSize: '10px', color: "grey", textAlign:"left" }}>Quick refund</p></NavLink></div>
<a href="https://www.google.com" target="_blank"  style={{ marginRight: '364px' }}><img src="/pics/jumiaprime.jpg" alt="jumiahead" height="229px"/></a>
</BrowserRouter>
</div>
            <div className="gal1">
            <Slides slide={listItems[0]} />
            {/* <slider key="id">
           
          <slide><p>1</p></slide> 
          <slide><p>2</p></slide> 
          <slide><p>3</p></slide> 
          <slide><p>4</p></slide> 
          
           </slider> */}
           <button className="discover">DISCOVER</button>
           </div>
           <Land />
           
</div>
    }
}

export default Gallery;