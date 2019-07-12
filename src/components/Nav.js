import React, {Component} from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'
import { Home, Book, AddShoppingCart, Help, KeyboardArrowDown} from '@material-ui/icons'


class Nav extends Component{

    render(){
        return(
            <div>
             <img src="/pics/jumiafirst.png" alt="jumiahead" width="100%"/> 
        
            <img style={{float: "left"}} src="/pics/jumiahead2.png" alt="jumiahead" />
            <div id="input-container">
            <input id="fname" type="text" placeholder="Search products, brands and categories"/>
            <button className="btnMain"> SEARCH </button>
            <ul className="headUl">
            <BrowserRouter>
            <NavLink to="/about" className="appy" activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li className="headLi">Hi, Chike<KeyboardArrowDown /></li>
        </NavLink>
        <NavLink to="/comment" className="appy" activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li className="headLi"><Help />Help<KeyboardArrowDown /></li>
        </NavLink>
        <NavLink to="/profile" className="appy" activeClassName="active" style={{ textDecoration: 'none' }}>
        <li className="headLi"><AddShoppingCart />Cart</li>
        </NavLink>
        </BrowserRouter>
        </ul>
            </div>
      
          
                </div>
        )
    }
}

export default Nav;