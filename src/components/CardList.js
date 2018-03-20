import React from ‘react’;
import IckyCard from './IckyCard';

class CardList extends React.Component{
  //don't forget the constructor props and super to bind this. 
  state = {
    picked:[],
    score: 0,
    topscore:0
  }
  validatePick(id) {
    // this is the code to handle the picking.
    if(!picked.includes(id)){
      pickedpush(id);
      this.state.set({score: score++})
    }
    resetGame();

    alert("THis ick is picked" + id);
    console.log(id);
  }
  resetGame(){
    this.state.set()
  }
  
    {/* 
      render ....
      what i used in app. validate pick with this.validate and id passed in
    in app, don't forget to pass down the id
    onClick{()=>props.validatePick(id)}
    */}
  
}

export default CardList;