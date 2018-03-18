import React, { Component } from 'react';
import ickies from './ickies.json';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import IckyCard from './components/IckyCard';


class App extends Component {

  //set state here for the cards to keep track of clicked on (t/f)
  state = {
    ickies
  }
  //map over json of ickies
  render() {
    return (
      <Wrapper>
        <Title>Icky Clicky</Title>
        <Instructions />
        <div className="gameboard">
          {this.state.ickies.map(icky => (
            <IckyCard
              rememberIcky={this.rememberIcky}
              id={icky.id}
              key={icky.id}
              name={icky.name}
              image={icky.image}
            />
          ))}
        </div>
      </Wrapper>   
    )
  }
}

export default App;
