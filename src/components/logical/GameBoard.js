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
    this.increaseScore = this.increaseScore.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.state = {
      score: 0,
      topscore: 0,
      message: ""
    };
    //testing colos here:
    // const randoPos = sample(messages[1]);
    // console.log(randoPos);
    // const randoNeg = sample(messages[2]);
    // console.log(randoNeg);
  }
  encourage = () => {
    console.log("encourage fired");
    const randoPos = sample(messages[1]);
    this.setState = {
      message: randoPos
    };
  };
  increaseScore = () => {
    console.log("increaseScore fired");
    this.setState((prevState, props) => {
      return { score: prevState.score + 1 };
    });
  };
  resetGame = () => {
    console.log("resetGame fired");
    const currentScore = this.state.score;
    if (this.state.score > this.state.topscore) {
      this.setState({
        topscore: currentScore,
        score: 0
      });
    } else {
      this.setState({
        score: 0
      });
    }
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
            resetGame={this.resetGame}
          />
        </div>
      </Fragment>
    );
  }
}

export default GameBoard;
