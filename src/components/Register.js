import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class Register extends Component{

render(){
    return(
        <div className='container2'>
        <h3>Create your Jumia account</h3> <br />

        <div className='2btn'>
     <div class='b3'>   
    <button className="japhbtn">CREATE AN ACCOUNT VIA E-MAIL</button>
    </div>
    <div className='b4'>
    <button className="japhbtn">REGISTER WITH FACEBOOK</button>
    </div>
        </div>

        </div>
    )
}
}
export default Register;