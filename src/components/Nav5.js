import React, {Component} from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'
import Land from './Land';
import Grid from './Grid';
import Nav from './Nav';
import NavTwo from './NavTwo';
import NavThree from './NavThree';
import { Home, Book, AddShoppingCart, Help, KeyboardArrowDown, RoomService, Tram, Flight, Work, Mood, AttachMoney, Stars} from '@material-ui/icons'


class Nav5 extends Component{

    render(){
        return(
            <div>
                <div>
       
            <ul className="headUl0">
            <BrowserRouter>
            <NavLink  className="appy0" activeClassName="active"  style={{ textDecoration: 'none', color: "orange", marginRight:"120px", marginTop: "5px" }}>
        <li className="headLi0" style={{ fontWeight: 'bold' }}><Stars style={{ height: '15px' }}/>Sell on Jumia</li>
        </NavLink>    
        <NavLink  className="appy0" activeClassName="active"  style={{ textDecoration: 'none', color: "black", marginRight:"-10px" }}>
        <li className="headLi0" style={{ fontWeight: 'bold',width:"90px" }}>JUMIA<AddShoppingCart style={{ height: '15px' }}/></li>
        </NavLink>
        <NavLink className="appy0" activeClassName="active" style={{ textDecoration: 'none', color: "grey" ,width:"90px" }}>
        <li className="headLi0"><RoomService style={{ height: '15px' }}/>FOOD</li>
        </NavLink>
        <NavLink className="appy0" activeClassName="active"  style={{ textDecoration: 'none', color: "grey" ,width:"90px" }}>
        <li className="headLi0"><Tram style={{ height: '15px' }}/>TRAVEL</li>
        </NavLink>
        <NavLink className="appy0" activeClassName="active"  style={{ textDecoration: 'none', color: "grey" ,width:"90px" }}>
        <li className="headLi0"><Flight style={{ height: '15px' }}/>FLIGHTS</li>
        </NavLink>
        <NavLink className="appy0" activeClassName="active"  style={{ textDecoration: 'none', color: "grey",width:"90px"  }}>
        <li className="headLi0"><AttachMoney style={{ height: '15px' }}/>DEALS</li>
        </NavLink>
        <NavLink className="appy0" activeClassName="active"  style={{ textDecoration: 'none', color: "grey" ,width:"90px" }}>
        <li className="headLi0"><Home style={{ height: '15px' }}/>HOUSE</li>
        </NavLink>
        <NavLink className="appy0" activeClassName="active"  style={{ textDecoration: 'none', color: "grey" ,width:"90px" }}>
        <li className="headLi0"><Mood style={{ height: '15px' }}/>PARTY</li>
        </NavLink>
        <NavLink className="appy0" activeClassName="active"  style={{ textDecoration: 'none', color: "grey" ,width:"90px" }}>
        <li className="headLi0"><Stars style={{ height: '15px' }}/>ONE</li>
        </NavLink>
               </BrowserRouter>
        </ul>
            </div>
            {/* <NavTwo /> */}
          
            
         </div>
          
               
        )
    }
}

export default Nav5;