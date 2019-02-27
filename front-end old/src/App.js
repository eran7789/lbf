import React, { Component } from 'react';
import styled from 'styled-components'; 

import Header from './components/header/header';
import Journal from './components/home/journal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Journal />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
