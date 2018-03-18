import React, { Component } from 'react';
import './App.css';
import ickies from './ickies.json';

class App extends Component {
  //map over json of ickies
  render() {
    return (
      <Wrapper>
        <Title>Icky Clicky</Title>
      </Wrapper>
      <div className="App">
        <div class="instructions">
          <p>Click on an icky and score points, but don't click on any icky than once or you'll get sicky!</p>
        </div>
      </div>
    );
  }
}

export default App;
