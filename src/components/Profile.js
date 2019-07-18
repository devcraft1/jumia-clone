import React, {Component} from 'react'
import {Link, Redirect, BrowserRouter} from 'react-router-dom'
import './profile.css';
import Footer from './Footer';
import FooterTwo from './FooterTwo';
import Items from './Items';
import Nav from './Nav';

class Profile extends Component{
  
        render(){
        return(
          <div>  
            <Nav />
               <div className='All'>
            <div className='FirstOverall'>
                <div className='Flex'>
                <div className='FirstDiv'>
                 <p>
                   <div className='Account'>
                   <nav className="nav"><h4 className='Account1'>My Jumia Account
                   </h4></nav><hr/></div>
                    <nav className="nav"><a className="a" href=""><h5>Orders</h5></a></nav>
                    <nav className="nav"><a className="a" href=""><h5>Pending Reviews</h5></a></nav>
                    <nav className="nav"><a className="a" href=""><h5>Jumia Credit</h5></a></nav>
                    <nav className="nav"><a className="a" href=""><h5>Saved items</h5></a></nav>
                    <nav className="nav"><a className="a" href=""><h5>Detail</h5></a></nav>
                    <nav className="nav"><a className="a" href=""><h5>Address Book</h5></a></nav>
                    <nav className="nav"><a className="a" href=""><h5>Change Pasword</h5></a></nav>
                    <nav className="nav"><a className="a" href=""><h5>Newsletter Preferences</h5></a></nav><hr/>
                    <nav className="nav"><a className="a" href=''><h4 className='Logout'>Logout</h4></a></nav>  
                  </p>
                  </div>
    
                   <div className='SecondOverall'>
                    <div className='SecondDiv'>
                    <p>
                      <h3>Account Overview</h3>
                     <h5>Account Details</h5>
                     Chike Chukwu<br></br>
                     chike@gmail.com
                     <br></br><br></br>
                     <h5 className='ChangePassword'>CHANGE PASSWORD</h5>
                   </p>
                     <div className='ThirdDiv'>
                     <br/>
                     <p>NEWSLETTER PREFERENCES
                     <h5>You are currently subscribed to following
                     newsletters</h5>
                    </p>
                    </div>
                   </div>
                    <div className='FourtDiv'> <p>
                        <h5>ADDRESS BOOK</h5>
                        <h5>Your Default shipping address</h5>
                        <h6>No:1764746648<br/> xxxxxxxxxxxx<br/> xxxxxxxxxxxx</h6>
                    </p>
                    </div>
                    </div>
                    </div>
                    <Items/>
                    </div>
                    <Footer />
            <FooterTwo />
                    </div>
                    </div>
        )
        }
    }
    

export default Profile;