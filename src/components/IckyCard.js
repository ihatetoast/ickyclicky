import React from "react";

//the indiv card created here. content = props
const IckyCard = props => (
  <div className="card" onClick= {props.METHOD FROM PARENT}>
  
    <div className="img-frame" >
      <img alt={props.name} src={props.image}/>
    </div>
  </div>
);

export default IckyCard;

//parent div(card) is the frame for image and also what's listened to
//inner div is only for image holding to give a little stoil and to pass props to image.

//fcn onClick={() => props.rememberIcky(props.id)}

//src={'./public/images/'+ props.name +'.svg'}