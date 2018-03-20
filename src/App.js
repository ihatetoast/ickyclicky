import React, { Component } from 'react';
import ickies from './ickies.json';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import IckyCard from './components/IckyCard';


class App extends Component {

  //set state here for the cards to keep track of clicked on (t/f) and top score. initial state is 0
  state = {
    ickies,
    score: 0,
    topscore: 0
  }

  //shuffle the array coming in
  shuffle = (cards) =>{
    //store the cards as they are pushed. return this
    let shuffledCards = [];
    //store arg
    let arr = cards;
    while(arr.length !==0){
      let randoIdx = Math.floor(Math.random() * arr.length);
      //push the item at that rando idx to shuffled cards
      shuffledCards.push(arr[randoIdx]); 
      //and then splice that sucker out of the array
      arr.splice(randoIdx,1);
    }
    return shuffledCards;
  }

  //slice to limit the grid to either 12 (4x3) or 16 (4x4). keep small with 4 images at first
  //map over json of ickies
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score}>Icky Clicky</Title>
        <Instructions />
        <div className="gameboard">
          {this.shuffle(this.state.ickies).map(icky => (
            <IckyCard
      {/*
      pass onclick mthd as a prop at this level
      */}
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
