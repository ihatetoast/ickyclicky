import React, { Component } from "react";
import { cloneDeep } from "lodash";
//a fcn to use to copy arr/obj tha tdoesn't ref/pt to orig

//components
import IckyCard from "./IckyCard";

//import my json
import ickies from "../../ickies.json";
//create obj called rendered ickies
//creates am aarray upon const. it's in state so i can modify at will

class CardList extends Component {
  constructor(props) {
    super(props);
    console.log(ickies);
    this.state = {
      renderedIckies: []
    };
    this.shuffle = this.shuffle.bind(this);
  }
  componentWillMount() {
    this.shuffle();
    console.log("mounting");
  }
  //don't forget the constructor props and super to bind this.
  state = {
    picks: []
  };
  // beenPicked(id) {
  //   return this.state.picks.includes(id);
  // }

  validatePick = () => {
    console.log(`Icky picked`);
    this.shuffle();
    //shuffle again. deal with this weds
  };
  shuffle = () => {
    const ickiesClone = cloneDeep(ickies);
    let shuffledCards = [];
    //store arg
    let arr = ickiesClone || [];
    while (arr.length !== 0) {
      let randoIdx = Math.floor(Math.random() * arr.length);
      //push the item at that rando idx to shuffled cards
      shuffledCards.push(arr[randoIdx]);
      //and then splice that sucker out of the array
      arr.splice(randoIdx, 1);
    }
    // return shuffledCards;
    console.log();
    this.setState({
      renderedIckies: shuffledCards.map(icky => (
        <IckyCard
          validatePick={this.validatePick}
          id={icky.id}
          key={icky.id}
          name={icky.name}
          image={icky.image}
        />
      ))
    });
  };
  render() {
    console.log(this.state.renderedIckies);
    return <div className="gameboard">{this.state.renderedIckies}</div>;
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
