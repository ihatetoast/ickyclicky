import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import Instructions from "./components/Instructions";
import GameBoard from "./components/GameBoard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Instructions />
        <GameBoard />
      </Fragment>
    );
  }
}

export default App;
