import React, {Component} from 'react'


class Footer extends Component{
    
    render(){
        return(
            
            <div className="b4foot">
               <div className="oneFeet">
               <img src="/pics/carty.png" alt="cart" width="68" height="68"/>
               <div><p style={{color: "grey", fontSize: "13px", marginLeft: "5px"}} >Get access to all exclusive offers, discounts and deals!</p>
              <h1 style={{fontSize: "14px", marginTop:"-10px", marginLeft: "5px" }}> <label style ={{background: "white", width:"500px", height:"100px"}} >FREE DOWNLOAD NOW</label><a href="#"><img src="/pics/mac-os-filled.png" className="foothov" alt="cart" width="30" height="30" style={{marginLeft: "28px"}}/></a>
                <a href="#"><img src="/pics/playstore-filled.png" className="foothov" alt="cart" width="30" height="30" style={{marginLeft: "35px"}} /></a></h1></div>
                </div>
                <div className="twoFeet">
                    <p style={{color:"grey", fontSize:"13px", fontWeight: "bold", textAlign: "left" }} >New to JUMIA?</p>
                    <p style={{color:"grey", fontSize:"13px"}} >Subscribe to our communications to receive special offers and latest news</p>
                    <input type="email" placeholder="Type your email here!" style={{border: "1px grey", outline: "none", height: "22px", margin: "5px", color: "grey"}}/>
                    <button className="footbtn">MALE</button>
                    <button className="footbtn">FEMALE</button>
                </div>
            </div>



            
        )
    }
}
export default Footer;