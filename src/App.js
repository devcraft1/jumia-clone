import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav';
import Register from './components/Register';
import Gallery from './components/Gallery';
import Display from './components/Display';
import Error from './components/Error';


class App extends Component {
  render() {
    return (
      <div className="App">    
      <BrowserRouter>
      <div>
          <Switch>
          <Route path="/" component={Login} />
          <Route path="/home" component={Display} />
          <Route path="/profile" component={Gallery} />
          <Route  component={Error} />
      </Switch>
      </div>
  
      </BrowserRouter>
      </div>        
    )
  }
}

export default App;
