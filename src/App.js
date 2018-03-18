import React, { Component } from 'react';
import './App.css';
import ickies from './ickies.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Icky Clicky</h1>
        </header>
        <div class="instructions">
          <p>Click on an icky thing and score points, but don't click on any icky than once!</p>
        </div>
      </div>
    );
  }
}

export default App;
