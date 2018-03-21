import React, { Component, Fragment } from "react";

//components
import Scores from "./Scores";
import CardGrid from "./CardGrid";

class GameBoard extends Component {
  state = {
    score: 0,
    topscore: 0
  };

  render() {
    return (
      <Fragment>
        <div className="scoreDiv">
          <Scores score={this.state.score} topscore={this.state.topscore} />
        </div>
        <div className="cardGrid">
          <CardGrid />
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
