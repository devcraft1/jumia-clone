import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav';
import Register from './components/Register';
import Gallery from './components/Gallery';
import Display from './components/Display';
import Error from './components/Error';
import Footer from './components/Footer';
import Profile from './components/Profile';



class App extends Component {
  render() {
    return (
      <div className="App">    
      <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Display} />
          <Route exact path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route  component={Error} />
      </Switch>
  
      </BrowserRouter>
      </div>        
    )
  }
}

export default App;
