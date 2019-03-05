import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './ui/NavBar';
import Home from './ui/Home';
import './App.css';

class App extends Component {
  render() {
    const logo = "RTcad";
    const title = "RTcad - Gerenciamento e cadastro"
    return (
      <div className="container">
      <NavBar logo={logo}/>
      {this.props.children}
    </div>
    );
  }
}

export default App;
