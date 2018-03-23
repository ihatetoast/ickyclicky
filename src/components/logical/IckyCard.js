import React from "react";

//the indiv card created here. content = props
const IckyCard = props => (
  <div
    className="card"
    onClick={e => {
      props.validatePick(props.id);
      props.incrementCounter();
      props.resetCounter();
    }}
  >
    <div className="img-frame">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default IckyCard;
