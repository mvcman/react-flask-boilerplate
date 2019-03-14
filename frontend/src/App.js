import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

             <Route exact path="/" component={Home}/>
             <Route exact path="/login" component={Login}/>

      </div>
      </Router>
    );
  }
}

export default App;
function Home(){
  return (
    <div><h1>Welcome to home!</h1></div>
  );
}

function Login(){
  return (
    <div><h1>Welcome to Login!</h1></div>
  );
}
