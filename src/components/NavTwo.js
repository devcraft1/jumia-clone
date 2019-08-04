import React, {Component} from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'
import Land from './Land';
import Grid from './Grid';
import List2 from './List2';
import List3 from './List3';
import MobileList1 from './MobileList1';
import MobileList from './MobileList';
import { Home, Book, AddShoppingCart, Help, KeyboardArrowDown, Dehaze, ShoppingCart, Person, Search} from '@material-ui/icons'


class NavTwo extends Component{

    state = {
        displayMenu: false,
        displayMenu2: false,
        displayMenu3: false,
        displayMenu4: false,
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

      showDropdownMenu3 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu3: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu3);
        });
      }

      hideDropdownMenu3 =()=> {
        this.setState({ displayMenu3: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu3);
        });
    
      }

      showDropdownMenu4 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu4: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu4);
        });
      }

      hideDropdownMenu4 =()=> {
        this.setState({ displayMenu4: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu4);
        });
    
      }
   

    render(){
        return(
            <div className="headBoy"> 
                
            {/* <img style={{float: "left"}} src="/pics/jumiahead2.png" alt="jumiahead" style={{ height: "66px" }} /> */}
            <div id="input-container1">
            <a style={{ textDecoration: 'none', color: "black" }} href="https://www.google.com"><Dehaze style={{float: "left", marginLeft: "320px", marginTop: "20px" }}/><h1 style={{ fontSize: "30px", float: "left" }}>JUMIA</h1></a><AddShoppingCart style={{float: "left", marginLeft: "1px", color: "orange", fontSize: '40px', marginTop: "20px"  }}/> 
            <input id="tname" type="text" placeholder="Search products, brands and categories"/>
            <button className="btnMain1"> SEARCH </button>
            <ul className="headUl1">
            <BrowserRouter>
            <div ><NavLink className="appy1" onClick={this.showDropdownMenu} activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li className="headLi1"><span style={{ color: "grey" }}>Need</span> Help?</li>
        </NavLink></div><KeyboardArrowDown style={{ marginTop: '22px'}}/> { this.state.displayMenu ? ( <List2/>) : (null) }
        <div><NavLink className="appy1" onClick={this.showDropdownMenu2} activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li className="headLi1"><span style={{ color: "grey" }}>Your</span> Account</li>
        </NavLink></div><KeyboardArrowDown style={{ marginTop: '23px', marginLeft: "15px"}}/> { this.state.displayMenu2 ? ( <List3 />) : (null) }
        <AddShoppingCart  style={{ marginTop: '14px' }} /><NavLink className="appy1" activeClassName="active" style={{ textDecoration: 'none' }}>
        <li className="headLi1"  style={{ marginTop: '14px' }}>Cart</li>
        </NavLink>
        </BrowserRouter>
        </ul>
            </div>
          
            
            <div className="mobileNav">
              <div className="mobileNavMenu">
              <NavLink className="appy1" onClick={this.showDropdownMenu3} activeClassName="active"  style={{ textDecoration: 'none', color: "black" }}><Dehaze style={{marginRight: "15px"}}/><span style={{ fontWeight:"bold", fontSize:"22px", fontFamily:"cursive"}}>JUMIA </span> </NavLink><AddShoppingCart style={{ color: "orange" }}/> 
            <Person onClick={this.showDropdownMenu4} style={{marginLeft: "200px"}}/> <ShoppingCart style={{marginLeft: "3px"}} />
            </div> 
          
            <div className="mobileinput1">
            <div className="search"><Search style={{marginBottom: "-7px"}}/><input className="mobileinput" placeholder="Search..."/></div>
            </div>
            </div>{ this.state.displayMenu3 ? ( <MobileList/>) : (null) } { this.state.displayMenu4 ? ( <MobileList1/>) : (null) }
           
            </div>
           
          
          
           
               
        )
    }
}

export default NavTwo;
