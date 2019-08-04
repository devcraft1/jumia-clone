import React, {Component} from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'
import { Home, KeyboardArrowRight, Work, ShoppingCart, FreeBreakfast, Language, Computer, Tv, MobileScreenShare, ChildCare, FitnessCenter, Casino, AllInclusive } from '@material-ui/icons';
import Nav4 from './Nav4';
import List from './List';
import List4 from './List4';

class Land extends Component{

    state = {
        displayMenu: false,
        displayMenu1: false,
        displayMenu2: false,
        displayMenu3: false,
        displayMenu4: false,
        displayMenu5: false,
        displayMenu6: false,
        displayMenu7: false,
        displayMenu8: false,
        displayMenu9: false,
        displayMenu10: false,
        displayMenu11: false,
        displayMenu12: false,       
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

      
      showDropdownMenu1 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu1: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu1 =()=> {
        this.setState({ displayMenu1: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }


      showDropdownMenu2 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu2: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu2 =()=> {
        this.setState({ displayMenu2: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }


      showDropdownMenu3 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu3: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu3 =()=> {
        this.setState({ displayMenu3: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }


      showDropdownMenu4 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu4: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu4 =()=> {
        this.setState({ displayMenu4: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }

      showDropdownMenu5 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu5: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu5 =()=> {
        this.setState({ displayMenu5: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }

      
      showDropdownMenu6 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu6: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu6 =()=> {
        this.setState({ displayMenu6: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }


      showDropdownMenu7 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu7: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu7 =()=> {
        this.setState({ displayMenu7: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }


      showDropdownMenu8 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu8: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu8 =()=> {
        this.setState({ displayMenu8: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }


      showDropdownMenu9 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu9: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu9 =()=> {
        this.setState({ displayMenu9: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
    
      showDropdownMenu10 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu10: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu10 =()=> {
        this.setState({ displayMenu10: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }


      showDropdownMenu11 = (event) => {
        event.preventDefault();
        this.setState({ displayMenu11: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu11 =()=> {
        this.setState({ displayMenu11: false }, () => {
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
                        <NavLink className="newAppy" onMouseOver={this.showDropdownMenu} onMouseOut={this.hideDropdownMenu}>
                        <li className="bodyLi"><ShoppingCart />FREE DELIVERY</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div>  { this.state.displayMenu ? ( <List/>) : (null) } { this.state.displayMenu11 ? ( <List4/>) : (null) } { this.state.displayMenu1 ? ( <List/>) : (null) } { this.state.displayMenu2 ? ( <List4/>) : (null) } { this.state.displayMenu3 ? ( <List/>) : (null) } { this.state.displayMenu4 ? ( <List/>) : (null) } { this.state.displayMenu5 ? ( <List4/>) : (null) } { this.state.displayMenu6 ? ( <List/>) : (null) } { this.state.displayMenu7 ? ( <List4/>) : (null) } { this.state.displayMenu8 ? ( <List/>) : (null) } { this.state.displayMenu9 ? ( <List4/>) : (null) } { this.state.displayMenu10 ? ( <List/>) : (null) }
                        <div><NavLink className="newAppy" onMouseOver={this.showDropdownMenu11} onMouseOut={this.hideDropdownMenu11}>
                        <li className="bodyLi"><MobileScreenShare />PHONES & TABLETS</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div> 
                        <div> <NavLink className="newAppy" onMouseOver={this.showDropdownMenu1} onMouseOut={this.hideDropdownMenu1}>
                        <li className="bodyLi"><Computer />COMPUTING</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li> 
                        </NavLink></div> 
                        <div><NavLink className="newAppy" onMouseOver={this.showDropdownMenu2} onMouseOut={this.hideDropdownMenu2}>
                        <li className="bodyLi"><Tv />ELECTRONICS</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div> 
                        <div><NavLink className="newAppy" onMouseOver={this.showDropdownMenu3} onMouseOut={this.hideDropdownMenu3}>
                        <li className="bodyLi"><Home/>HOME & OFFICE</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div> 
                        <div><NavLink className="newAppy" onMouseOver={this.showDropdownMenu4} onMouseOut={this.hideDropdownMenu4}>
                        <li className="bodyLi"><Work />FASHION</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div> 
                        <div><NavLink className="newAppy" onMouseOver={this.showDropdownMenu5} onMouseOut={this.hideDropdownMenu5}>
                        <li className="bodyLi"><FitnessCenter />HEALTH & BEAUTY</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div> 
                        <div> <NavLink className="newAppy" onMouseOver={this.showDropdownMenu6} onMouseOut={this.hideDropdownMenu6}>
                        <li className="bodyLi"><Casino />GAMING</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div> 
                        <div><NavLink className="newAppy" onMouseOver={this.showDropdownMenu7} onMouseOut={this.hideDropdownMenu7}>
                        <li className="bodyLi"><FreeBreakfast />GROCERY</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div> 
                        <div><NavLink className="newAppy" onMouseOver={this.showDropdownMenu8} onMouseOut={this.hideDropdownMenu8}>
                        <li className="bodyLi"><Language />GLOBAL STORE</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div> 
                        <div><NavLink className="newAppy" onMouseOver={this.showDropdownMenu9} onMouseOut={this.hideDropdownMenu9}>
                        <li className="bodyLi"><ChildCare />BABY PRODUCTS</li><li><KeyboardArrowRight style={{color: "grey", fontSize: '20px', float: "right",marginTop:"-20px"}}/></li>
                        </NavLink></div> 
                        <div><NavLink className="newAppy" onMouseOver={this.showDropdownMenu10} onMouseOut={this.hideDropdownMenu10}>
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