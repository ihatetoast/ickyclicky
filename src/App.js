import React, { Component, Fragment } from "react";

import Header from "./components/stateless/Header";
import Instructions from "./components/stateless/Instructions";
import GameBoard from "./components/logical/GameBoard";
import Footer from "./components/stateless/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Instructions />
        <GameBoard />
        <Footer tagline="Toast is icky" />
      </Fragment>
    );
  }
}

export default App;
