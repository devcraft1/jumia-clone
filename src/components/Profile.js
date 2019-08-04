import React, {Component} from 'react'
import {Link, Redirect, BrowserRouter} from 'react-router-dom'
import './profile.css';
import Profilefooter from './Profilefooter';
import Nav5 from './Nav5';
import Nav6 from './Nav6';

class Profile extends Component{
  
        render(){
        return(
          <div>  
            <Nav5 />
            <Nav6 />
            <div className="ProfileGeneral">
           
     <div className="ProfileSuper">
     <div className="ProfileAll">
    
     <div className="ProfileFirst">
     <nav>< a className='a' href=""><h4 className='profileAccount'><img className='profileIcon' src="/pics/person-icon (copy).png" alt='icon'/>My Jumia Account</h4></a></nav><br/>
     <nav><a className='a' href=""><h5><img className='profileIcon' src="/pics/order-icon (copy).png"alt='icon'/> Orders</h5></a></nav><br/>
     <nav><a className='a' href=""><h5><img className='profileIcon' src="/pics/mail-icon (copy).png"alt='icon'/>Pending Reviews</h5></a></nav><br/>
     <nav><a className='a' href=""><h5><img className='profileIcon' src="/pics/credit-icon (copy).png" alt='icon'/>Jumia Credit</h5></a></nav><br/>
     <nav><a className='a' href=""><h5><img className='profileIcon' src="/pics/love-icon (copy).png" alt='icon'/>Saved items</h5></a></nav><br/>
     <nav>< a className='a' href=""><h5>Details</h5></a></nav>
     <nav>< a className='a' href=""><h5>Address Book</h5></a></nav>
     <nav>< a className='a' href=""><h5>Change Password</h5></a></nav>
     <nav>< a className='a' href=""><h5>Newsletter Preferences</h5></a></nav>
     <nav>< a className='a' href="/login"><h5 className="profileLogout">LOGOUT</h5></a></nav>
     </div>
     
     <div className="ProfileSecond">
     <div className="ProfileSecond1"><span><h3>ACCOUNT OVERVIEW</h3></span>
     
     <h5 className="DivBorders">ACCOUNT DETAILS<img className='profileIcons' src="/pics/o-pen-icon (copy).png" alt='icon'/><h5/></h5>
     <h5>CHIKE CHUKWU</h5>
     <h5>chukwu@yahoo.com</h5>
     <h7>chukw@gmail.com</h7>
     <h5 className="ProfilePassword">CHANGE PASSWORD</h5> </div>

     <div className="ProfileSecond1">
     <h5 className="DivBorders">ADDRESS BOOK<img className='profileIcons' src="/pics/o-pen-icon (copy).png"alt='icon'/><h5/></h5>
     <h5>Chike chukwu</h5>
     <h5>Area L beside Abayi near Diamond Aba, Abia state</h5>
     <h5>Abia state, Nigeria</h5>
     <h5>+08065738389</h5>
     </div><br/>

     <div className="ProfileSecond1"><h5 className="DivBorders">NEWSLETTER PREFERENCES<img className='profileIcons' src="/pics/o-pen-icon (copy).png"alt='icon'/><h5/></h5><br/>
     <h5>you are currently subscribing to following newsletters</h5><br/>
     <h5><img className="ProfileGood-icon" src='/pics/Good-icon (copy).png' alt='icon'/>daily newsletters</h5></div>
     </div> 
     </div>
     <br/>   
     <div className="ProfileRecommended"><h3>Recommended for you</h3></div>
     <div className="profileJugs">
     <div className="ProfileJugsAll">
     <a className='a' href="https://jumia.com.ng"><p className="ProfileRelative">-10%</p><img className="profileJug" src="/pics/jug1 (copy).jpg" alt="image" height="%" width="%" /><p>1.5L Blender/Grinder<br/> #7,500</p></a> 
     </div>
     <div className="ProfileJugsAll">
     <a className='a' href="https://jumia.com.ng"><p className="ProfileRelative">-22%</p><img className="profileJug" src="/pics/jug2 (copy).jpg" alt="image" height="%" width="%"/><p>3 in 1 Blender<br/> #3,300</p></a>
     </div>
     <div className="ProfileJugsAll">
     <a className='a' href="https://jumia.com.ng"><p className="ProfileRelative">-22%</p><img className="profileJug" src="/pics/jug3b (copy).jpg" alt="image" height="%" width="%"/><p>Blender<br/> #7,880</p></a>
     </div>
     <div className="ProfileJugsAll">
     <a className='a' href="https://jumia.com.ng"><p className="ProfileRelative">-19%</p><img className="profileJug" src="/pics/jug4 (copy).jpg" alt="image" height="%" width="%"/><p>1.25litre<br/> #5,750</p></a>
    </div>
     <div className="ProfileJugsAll">
     <a className='a' href="https://jumia.com.ng"><p className="ProfileRelative">-34%</p><img className="profileJug" src="/pics/jug5 (copy).jpg" alt="image" height="%" width="%"/><p>1.5litre Blender<br/> #5,500</p></a>
     </div>
     <div className="ProfileJugsAll">
     <a className='a' href="https://jumia.com.ng"><p className="ProfileRelative">-16%</p><img className="profileJug" src="/pics/jug6 (copy).jpg" alt="image"height="%" width="%"/><p>Sweet Blender<br/> #4,500</p></a>

     </div>
     </div>
     </div>
     <Profilefooter/>
     </div>  
     </div>      
    
 )
 }

}
    

export default Profile;