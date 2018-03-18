import React from "react";
import Scores from "./subcomponents/Scores";

const Title = props => (
  <div>
    <h1 className="title">{props.children}</h1>
    <Scores />
  </div>
);

export default Title;
