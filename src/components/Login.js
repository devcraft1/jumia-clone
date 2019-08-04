import React, {Component} from 'react'
import {Redirect,BrowserRouter,Link} from 'react-router-dom'
import Footer from './Footer';
import FooterTwo from './FooterTwo';
import './login.css';
import Nav5 from './Nav5';
import NavThree from './NavThree';

class Login extends Component{
constructor(props){
    super(props)

    const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
    this.state = {
        email: "",
        password:"",
        loggedIn
    }
    this.onChange=this.onChange.bind(this)
    this.submitForm=this.submitForm.bind(this)
}

onChange(e){
    this.setState({[e.target.name]:e.target.value})
}
submitForm(e){
e.preventDefault()

const{ email ,password }= this.state
if(email === 'danekehu@gmail.com' && password ==='123'){
    localStorage.setItem("token", 'okijl')
    this.setState({
        loggedIn:true
    })
    return this.props.history.push('/profile')   
    
} else {
    alert ("wrong login details")
}

}


render(){
    return(
        <div>
            <Nav5 />
            <NavThree />
        <div className='login-container'>
        <div class='ctn1'>
        <form  onSubmit={this.submitForm}>
            <h3>Login</h3>
            
            <div className="login-Wrapper">
                <div className="Inputlogin">
                <input id="input" className="Input-text" type='email' placeholder='email' name='email' value={this.state.email} onChange={this.onChange}></input>
                <label for="input" className="Input-label">Email</label>            
            </div>

            <div className="Inputlogin">
                <input id="input" className="Input-text"type='password' placeholder='password' name='password' value={this.state.password}  onChange={this.onChange}></input>
                <label for="input" className="Input-label">Password</label>            
                </div>
            </div>

            <div className='box0'>
                <p><input type='checkbox' required='required'></input>Remember me</p>
            <p className='para'>Forgot your password?</p>
        </div>

        <div className='btnss1'>
            <button className='b1'>LOGIN</button> 
            <button className='b2'> LOGIN WITH FACEBOOK</button>
        </div>

        </form>
        </div>

  <div className='ctn2'>
    <h3 >Create our Jumia account</h3> <br />

  <div className='b2tn'>
  <div class='b3'>   
    <button >CREATE AN ACCOUNT VIA E-MAIL</button>
  </div>

  <div className='b4'>
    <button>REGISTER WITH FACEBOOK</button>
 </div>
 </div>

 </div>

 </div>
 <Footer />
 <FooterTwo />

 </div>
        
    
    )
}
}
        
    



export default Login;



// 
//   // <div>
//         //     <h1>Login here</h1>
//         //     <form onSubmit={this.submitForm}>
//         //     <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange}/><br />
//         //     <input type='password' placeholder='password' name='password' value={this.state.password}  onChange={this.onChange}/><br />
//         // <input type='submit'/>
//         // </form>
//         // </div>

//         // render() {
        
 
        //     return(
              
        // <div>
        // <div className='container'>
        // <form onSubmit={this.submitForm}>
        // <h3>Login</h3>
        
        // <div className="Wrapper">
        // <div className="Input">
        // <input type='email' placeholder='email' name='email' value={this.state.email} onChange={this.onChange}/>
        // <label for="input" className="Input-label">First Name</label>            
        // </div>
        
        // <div className="Input">
        // <input className="Input1"type='password' placeholder='password' name='password' value={this.state.password}  onChange={this.onChange}/>
        // <label for="input" className="Input-label">Last Name</label>            
        // </div>
        // </div>
        
        // <div className='box'>
        // <p><input type='checkbox' required='required'></input>Remember me</p>
        // <p className='para'>Forgot your password?</p>
        // </div>
        
        // <div className='btns1'>
        // <button className='b1'>LOGIN</button> <br />
        // <button className='b2'> LOGIN WITH FACEBOOK</button>
        // </div>
        // </form>
        
        
        // </div>
    
        // <Footer />
        // <FooterTwo />
        // </div>
        //     )
        // }}