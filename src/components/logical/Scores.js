import React from "react";
//static with "staty" until katy is ready for staty
const Scores = props => (
  <div className="scores">
    <ul className="scoreList">
      <li>
        <span className="scoreTitle">Current score: </span>
        <span>{props.score}</span>
      </li>
      <li>
        <span className="scoreTitle">Top score: </span>
        <span>{props.topscore}</span>
      </li>
    </ul>
  </div>
);

export default Scores;
/*
if time allows: style the lead into the scores one way and the actual number another. 
*/
