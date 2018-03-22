import React, { Component, Fragment } from "react";

import Header from "./components/lean/Header";
import Instructions from "./components/lean/Instructions";
import GameBoard from "./components/logical/GameBoard";

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
