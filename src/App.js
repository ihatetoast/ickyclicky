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
        "is icky",
        "is sad",
        "crumbs ruins butter",
        "smells",
        "is the Putin of breakfast"
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Instructions />
        <GameBoard />
        <Footer tagline={`Toast ${sample(this.state.tagline)}`} />
      </Fragment>
    );
  }
}

export default App;
