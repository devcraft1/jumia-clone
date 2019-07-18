import React, {Component} from 'react'
import {Link, BrowserRouter} from 'react-router-dom'

class Stable extends Component{
    
    render(){
        return(
            <div>
                
                  <a href="/login">Login</a>
                 <p>New Customer <a href="#">Sign Up</a></p>
                 

            </div>
        )
    }
}
export default Stable;

{/* <button className="logbtn">Login</button> */}