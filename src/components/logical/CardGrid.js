import React, { Component } from "react";
//using cloneDeep from lodash to copy array of ickies that doesn't end up just being a pointer:
import { cloneDeep } from "lodash";

import IckyCard from "./IckyCard";
import ickies from "../../ickies.json";

class CardList extends Component {
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
  }

  validatePick = id => {
    const alreadyPicked = this.state.picked;
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
    let arr = ickiesClone || [];
    while (arr.length !== 0) {
      let randoIdx = Math.floor(Math.random() * arr.length);
      shuffledCards.push(arr[randoIdx]);
      arr.splice(randoIdx, 1);
    }
    this.setState({
      renderedIckies: shuffledCards
        .splice(0, 4)
        .map(icky => (
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
    return <div className="cardGrid">{this.state.renderedIckies}</div>;
  }
}

export default CardList;
