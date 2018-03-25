import React, { Component } from "react";
//using cloneDeep from lodash to copy array of ickies that doesn't end up just being a pointer:
import { cloneDeep } from "lodash";

import IckyCard from "./IckyCard";
import ickies from "../../ickies.json";
//create obj called rendered ickies
//creates a array upon const. it's in state so i can modify at will

class CardList extends Component {
  //constructor is the new getInitialState
  constructor(props) {
    super(props);
    this.state = {
      renderedIckies: [],
      picked: []
    };
    this.shuffle = this.shuffle.bind(this);
    this.validatePick = this.validatePick.bind(this);
  }
  componentWillMount() {
    this.shuffle();
    console.log("mounting");
  }

  validatePick = id => {
    console.log("validate pick fired");
    const alreadyPicked = this.state.picked;
    //use filter or includes to find the id of the picked in the array.
    if (!alreadyPicked.includes(id)) {
      alreadyPicked.push(id);
      this.props.increaseScore();
      this.shuffle();
    } else {
      this.props.resetGame();
      this.setState({
        picked: []
      });
      this.shuffle();
    }
  };

  shuffle = () => {
    const ickiesClone = cloneDeep(ickies);
    let shuffledCards = [];
    //store arg
    let arr = ickiesClone || [];
    while (arr.length !== 0) {
      let randoIdx = Math.floor(Math.random() * arr.length);
      shuffledCards.push(arr[randoIdx]);
      arr.splice(randoIdx, 1);
    }
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
    //the above shows all of hte props from fn to id/key/etc
    return <div className="gameboard">{this.state.renderedIckies}</div>;
  }
}

export default CardList;
