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
      level: "",
      message: "Pick an icky, Mickey."
    };
  }
  increaseScore = () => {
    const randoMessage = sample(messages);
    this.setState((prevState, props) => {
      return {
        score: prevState.score + 1,
        message: randoMessage
      };
    });
  };
  chooseLevel = () => {
    console.log("chooseLevel fired.");
  };

  resetGame = () => {
    const currentScore = this.state.score;
    if (this.state.score > this.state.topscore) {
      this.setState({
        topscore: currentScore,
        score: 0,
        message: "Bugger. But that's a new top score!"
      });
    } else {
      this.setState({
        score: 0,
        message: "You blew it, Hewitt."
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
        <div className="gameBoard">
          <CardGrid
            message={this.renderMessage}
            increaseScore={this.increaseScore}
            resetGame={this.resetGame}
            level={this.state.level}
          />
        </div>
      </Fragment>
    );
  }
}

export default GameBoard;
