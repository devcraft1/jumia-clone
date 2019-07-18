import React, {Component} from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'
import { Home, KeyboardArrowRight, Work, ShoppingCart, FreeBreakfast, Language, Computer, Tv, MobileScreenShare, ChildCare, FitnessCenter, Casino, AllInclusive } from '@material-ui/icons';
import Nav4 from './Nav4';
import List from './List';
import Gallery from './Gallery';
import Grid from './Grid';

class Land extends Component{

    state = {
        displayMenu: false,
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
    
 

    render(){
        return (
            <div>
          
                <div className="bodyDiv">
                    <ul className="bodyUl">
                        <BrowserRouter>
                        <div>
                        <NavLink className="newAppy" onClick={this.showDropdownMenu}>
                        <li className="bodyLi"><ShoppingCart />FREE DELIVERY</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>  { this.state.displayMenu ? ( <List/>) : (null) }
                        <div><NavLink className="newAppy">
                        <li className="bodyLi"><MobileScreenShare />PHONES & TABLETS</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        <div> <NavLink className="newAppy">
                        <li className="bodyLi"><Computer />COMPUTING</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        <div><NavLink className="newAppy">
                        <li className="bodyLi"><Tv />ELECTRONICS</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        <div><NavLink className="newAppy">
                        <li className="bodyLi"><Home/>HOME & OFFICE</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        <div><NavLink className="newAppy">
                        <li className="bodyLi"><Work />FASHION</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        <div><NavLink className="newAppy">
                        <li className="bodyLi"><FitnessCenter />HEALTH & BEAUTY</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        <div> <NavLink className="newAppy">
                        <li className="bodyLi"><Casino />GAMING</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        <div><NavLink className="newAppy">
                        <li className="bodyLi"><FreeBreakfast />GROCERY</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        <div><NavLink className="newAppy">
                        <li className="bodyLi"><Language />GLOBAL STORE</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        <div><NavLink className="newAppy">
                        <li className="bodyLi"><ChildCare />BABY PRODUCTS</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        <div><NavLink className="newAppy">
                        <li className="bodyLi"><AllInclusive />OTHER CATEGORIES</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>
                        </BrowserRouter>
                    </ul>
                
                </div>
            </div>
        )

    
    }
}

export default Land;