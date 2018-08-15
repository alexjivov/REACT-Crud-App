import React, { Component, Fragment } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import { ImplicitCallback } from '@okta/okta-react';
import loginButton from './components/loginButton';

class App extends Component {
  render() {
    return (
      <div>
       <AppHeader/>
       <Route exact path="/" component={Home} />
     <Route path="/implicit/callback" component={ImplicitCallback} />
        <loginButton/>
      {/* <Home/> */}
      <h1>Welcome Home!!</h1>
      </div>
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
