import React, { Component } from 'react';
import './App.css';
import Invoices from './Invoices';

class App extends Component {
  render () {
    return (
      <div>
        <div className="App">
          <h1> Hi, I'm a simple invoicing app.</h1>
        </div>
        <Invoices />
      </div>
    );
  }
}

export default App;
