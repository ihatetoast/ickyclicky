# pseudocode of icky clicky

* as a player, i want to see the game name, instructions, and board
* as a player, i want to see my score 
* as a player, i want to see the top score
* as a player, i want my score to increase when i click on a new card

* as the game maker, i want to make a grid of 4x4 or even just 3x3 cards
* [x]as the game maker, i want the cards to load at random on load
* as the game maker, i want to tell the player to begin by clicking
* as the game maker, i want to tell the player that they clicked correctly if they click on an image they haven't yet done
* as the game maker, i want to tell the player that they clicked INcorrectly if they click on an image more than once
* as the game maker, i want to reset the score to 0 when they double click
* as the game maker, i want to maintain the current top score

### notes
fisher yates to shuffle array
then slice to take only the ones i need
then map over
let cardGrid = this.props.data.slice(0,12).map(item) => {
  return <Mycomponent key={item.id} image={image} />
}

### Questions for TV
I have scores in a <Scores /> comp. App has a <Title /> that gets a <Scores />. How do I get the state from <App /> to <Scores />?