import React, { Component, Fragment } from "react";
//turdparty
import { sample } from "lodash";
//data
import messages from "../../messages.js";

//components
import Scores from "./Scores";
import CardGrid from "./CardGrid";
import Message from "./Message";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    // this.something=this.something.bind(this);
    this.increaseScore = this.increaseScore.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = {
      score: 0,
      topscore: 0,
      message: "Pick an ick, Mick"
    };
    //testing colos here:
    // const randoPos = sample(messages[1]);
    // console.log(randoPos);
    // const randoNeg = sample(messages[2]);
    // console.log(randoNeg);
  }

  //after validating that the card has not already been clicked, increase the score and all the joys: positive message
  /**
    const randoPos = sample(messages[1]);
    
   */
  /*
    const randoNeg = sample(messages[2]);
    
   */
  increaseScore = () => {
    console.log("increaseScore fired");
    this.setState({
      score: this.state.score + 1
    });
  };
  resetCounter = () => {
    console.log("ResetCounter fired");
    this.setState({ topscore: 0 });
  };
  render() {
    return (
      <Fragment>
        <div className="scoresMessages">
          <Message message={this.state.message} />
          <Scores score={this.state.score} topscore={this.state.topscore} />
        </div>
        <div className="cardGrid">
          <CardGrid
            message={this.renderMessage}
            increaseScore={this.increaseScore}
            resetCounter={this.resetCounter}
          />
        </div>
      </Fragment>
    );
  }
}

export default GameBoard;
