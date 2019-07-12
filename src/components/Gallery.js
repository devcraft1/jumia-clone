import React, { Component } from 'react';
import {NavLink, BrowserRouter} from 'react-router-dom'
import { Home, Book, MonetizationOn, AccountBalance, Sync} from '@material-ui/icons'
import './new.css';
import Land from "./Land"

class Gallery extends Component {

    render() {
        return <div className="gallery">
            <div className="gal2">
                 <BrowserRouter>
                 <AccountBalance style={{ height: '20px', float: "left", marginTop: "13px" , marginLeft: '19px'}}/><div className="sidediv" style={{ marginLeft: '19px' }}><NavLink style={{ textDecoration: 'none' }}>
<h1 style={{ fontSize: '10px', color: "orange" }}>SELL ON JUMIA</h1>
<p style={{ fontSize: '10px', color: "orange" }}>Millions of monthly visitors</p></NavLink></div>

<MonetizationOn style={{ height: '20px', float: "left", marginTop: "5px", marginLeft: '19px' }}/><div className="sidediv" style={{ marginLeft: '19px' }}><NavLink  style={{ textDecoration: 'none' }}><h1 style={{ fontSize: '10px', color: "grey" }}>PAY ON DELIVERY</h1>
<p style={{ fontSize: '10px', color: "grey" }}>After checking the product</p></NavLink></div>

<Sync style={{ height: '20px', float: "left", marginTop: "2px", marginLeft: '19px' }}/><div className="sidediv" style={{ marginLeft: '19px' }}><NavLink style={{ textDecoration: 'none' }}><h1 style={{ fontSize: '10px', color: "grey" }}>EASY RETURN</h1>
<p style={{ fontSize: '10px', color: "grey" }}>Quick refund</p></NavLink></div>
<NavLink><img src="/pics/jumiaprime.jpg" alt="jumiahead" height="229px"/></NavLink>
</BrowserRouter>
</div>
            <div className="gal1">
            <slider key="id">
           
          <slide><p>1</p></slide> 
          <slide><p>2</p></slide> 
          <slide><p>3</p></slide> 
          <slide><p>4</p></slide> 
          
           </slider>
           <button className="discover">DISCOVER</button>
           </div>
           <Land />
           
</div>
    }
}

export default Gallery;