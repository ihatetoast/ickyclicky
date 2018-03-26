import React from "react";
//static with "staty" until katy is ready for staty
const Scores = props => (
  <div className="scoresDiv">
    <div>
      <p>
        Current score: <span className="scores">{props.score}</span>
      </p>
    </div>
    <div>
      <p>
        Top score: <span className="scores">{props.topscore}</span>
      </p>
    </div>
  </div>
);

export default Scores;
/*
if time allows: style the lead into the scores one way and the actual number another. 
*/
