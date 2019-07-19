import React, {Component} from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'
import Land from './Land';
import Grid from './Grid';
import List2 from './List2';
import List3 from './List3';
import { Home, Book, AddShoppingCart, Help, KeyboardArrowDown, Dehaze, ShoppingCart, Person, Search} from '@material-ui/icons'


class Nav6 extends Component{

    state = {
        displayMenu: false,
        displayMenu2: false,
      };

      showDropdownMenu = (event) => {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu =()=> {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }

      showDropdownMenu2 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu2: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu2);
        });
      }

      hideDropdownMenu2 =()=> {
        this.setState({ displayMenu2: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu2);
        });
    
      }
   

    render(){
        return(
            <div className="headBoy"> 
                
            {/* <img style={{float: "left"}} src="/pics/jumiahead2.png" alt="jumiahead" style={{ height: "66px" }} /> */}
            <div id="input-container3">
            <Dehaze style={{float: "left", marginLeft: "320px", marginTop: "20px" }}/><h1 style={{ fontSize: "30px", float: "left" }}>JUMIA</h1><AddShoppingCart style={{float: "left", marginLeft: "1px", color: "orange", fontSize: '40px', marginTop: "20px"  }}/> 
          <input id="lname" type="text" placeholder="Search products, brands and categories"/>
            <button className="btnMain3"> SEARCH </button>
            <ul className="headUl1">
            <BrowserRouter>
            <NavLink className="appy1" onClick={this.showDropdownMenu} activeClassName="active"  style={{ textDecoration: 'none', marginTop:"18px"}}>
            <li className="headLi3">Hi Chike</li>
        </NavLink><KeyboardArrowDown style={{ marginTop: '22px'}}/> { this.state.displayMenu ? ( <List2/>) : (null) }
        <Help style={{marginTop:"18px"}}/><NavLink className="appy1" onClick={this.showDropdownMenu} activeClassName="active"  style={{ textDecoration: 'none', marginTop:"18px"}}>
            <li className="headLi1">Help</li>
        </NavLink><KeyboardArrowDown style={{ marginTop: '22px'}}/> { this.state.displayMenu ? ( <List2/>) : (null) }
        <AddShoppingCart  style={{ marginTop: '14px' }} /><NavLink className="appy1" activeClassName="active" style={{ textDecoration: 'none' }}>
        <li className="headLi1"  style={{ marginTop: '14px' }}>Cart</li>
        </NavLink>
        </BrowserRouter>
        </ul>
            </div>
          
            
            <div className="mobileNav">
              <div className="mobileNavMenu">
            <Dehaze style={{marginRight: "15px"}}/><span style={{ fontWeight:"bold", fontSize:"22px", fontFamily:"cursive"}}>JUMIA </span> <AddShoppingCart style={{ color: "orange" }}/> 
            <Person style={{marginLeft: "200px"}}/> <ShoppingCart style={{marginLeft: "3px"}} />
            </div> 
          
            <div className="mobileinput1">
            <div className="search"><Search style={{marginBottom: "-7px"}}/><input className="mobileinput" placeholder="Search..."/></div>
            </div>
            </div>
           
            </div>
           
          
          
           
               
        )
    }
}

export default Nav6;
