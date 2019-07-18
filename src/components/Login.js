import React, {Component} from 'react'
import {Redirect,BrowserRouter,Link} from 'react-router-dom'
import Footer from './Footer';
import FooterTwo from './FooterTwo';
import Register from './Register';
import './login.css';

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
    return this.props.history.push('/')   
    
}

}


render() {
        
 
    return(
        // <div>
        //     <h1>Login here</h1>
        //     <form onSubmit={this.submitForm}>
        //     <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange}/><br />
        //     <input type='password' placeholder='password' name='password' value={this.state.password}  onChange={this.onChange}/><br />
        // <input type='submit'/>
        // </form>
        // </div>
<div>
<div className='container'>
<form onSubmit={this.submitForm}>
<h3>Login</h3>

<div className="Wrapper">
<div className="Input">
<input type='email' placeholder='email' name='email' value={this.state.email} onChange={this.onChange}/>
<label for="input" className="Input-label">First Name</label>            
</div>

<div className="Input">
<input className="Input1"type='password' placeholder='password' name='password' value={this.state.password}  onChange={this.onChange}/>
<label for="input" className="Input-label">Last Name</label>            
</div>
</div>

<div className='box'>
<p><input type='checkbox' required='required'></input>Remember me</p>
<p className='para'>Forgot your password?</p>
</div>

<div className='btns1'>
<button className='b1'>LOGIN</button> <br />
<button className='b2'> LOGIN WITH FACEBOOK</button>
</div>
</form>


</div>
{/* <Register /> */}
<Footer />
<FooterTwo />
</div>
    )
}}
export default Login;

