import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'

class App extends Component {
  render() {
    return (
      // BEM
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
