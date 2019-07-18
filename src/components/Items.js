import React, {Component} from 'react'
import {Link, Redirect, BrowserRouter} from 'react-router-dom'
import './profile.css'


    class Items extends Component{
      render(){
          return(
          <div>
              <img className='ProfileImage' src="/pics/den_jumia.png" 
              width='' height='' margin='30%' alt='image' style={{marginTop: "10px"}}/>
          </div>
      )
    }
}

export default Items;