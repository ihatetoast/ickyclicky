import React, { Component, Fragment } from "react";
import { sample } from "lodash";

import Header from "./components/stateless/Header";
import Instructions from "./components/stateless/Instructions";
import GameBoard from "./components/logical/GameBoard";
import Footer from "./components/stateless/Footer";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      tagline: [
        "is icky.",
        "is angry bread.",
        "crumbs ruin butter.",
        "smells.",
        "is the Putin of breakfasts.",
        " ... it burns. It burrrrns!"
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="game">
          <Instructions />
          <GameBoard />
        </div>
        <Footer tagline={`Toast ${sample(this.state.tagline)}`} />
      </Fragment>
    );
  }
}

export default App;
