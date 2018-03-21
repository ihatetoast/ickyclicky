import React, { Component } from "react";
//import my json
import ickies from "../ickies.json";
//components
import IckyCard from "./IckyCard";

class CardList extends Component {
  //don't forget the constructor props and super to bind this.
  state = {
    ickies,
    picked: []
  };
  // validatePick(id) {
  //   // this is the code to handle the picking.
  //   if (!picked.includes(id)) {
  //     pickedpush(id);
  //     this.state.set({ score: score++ });
  //   }
  //   resetGame();

  //   alert("THis ick is picked" + id);
  //   console.log(id);
  // }
  // resetGame() {
  //   this.state.set();
  // }
  shuffle = cards => {
    let shuffledCards = [];
    //store arg
    let arr = cards;
    while (arr.length !== 0) {
      let randoIdx = Math.floor(Math.random() * arr.length);
      //push the item at that rando idx to shuffled cards
      shuffledCards.push(arr[randoIdx]);
      //and then splice that sucker out of the array
      arr.splice(randoIdx, 1);
    }
    return shuffledCards;
  };
  render() {
    return (
      <div className="gameboard">
        {this.shuffle(this.state.ickies).map(icky => (
          <IckyCard
            id={icky.id}
            key={icky.id}
            name={icky.name}
            image={icky.image}
          />
        ))}
      </div>
    );
  }
}

export default CardList;

/* 
 
      pass onclick mthd as a prop at this level

      render ....
      what i used in app. validate pick with this.validate and id passed in
    in app, don't forget to pass down the id
    onClick{()=>props.validatePick(id)}
    */
