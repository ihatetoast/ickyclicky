import React, { Component, Fragment } from "react";

//components
import Scores from "./Scores";
import CardGrid from "./CardGrid";

class GameBoard extends Component {
  // increment counter, resent cohnter
  constructor(props) {
    super(props);
    // this.something=this.something.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = {
      score: 0,
      topscore: 0
    };
  }
  incrementCounter = () => {
    console.log("incrementCounter fired");
    this.setState({ score: this.state.score + 1 });
  };
  resetCounter = () => {
    console.log("ResetCounter fired");
    this.setState({ topscore: 0 });
  };
  render() {
    return (
      <Fragment>
        <div className="scoreDiv">
          <Scores score={this.state.score} topscore={this.state.topscore} />
        </div>
        <div className="cardGrid">
          <CardGrid
            incrementCounter={this.incrementCounter}
            resetCounter={this.resetCounter}
          />
        </div>
      </Fragment>
    );
  }
}

export default GameBoard;

//   //shuffle the array coming in

//   handleIckyPick = e => {
//     alert(`I clicked icky: ${id}`);
//   };
//   //slice to limit the grid to either 12 (4x3) or 16 (4x4). keep small with 4 images at first
//   //map over json of ickies
//   /*
//       pass onclick mthd as a prop at this level
//       */
//     )
//   }
// }
