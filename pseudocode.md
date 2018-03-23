# pseudocode of icky clicky

* [x]as a player, i want to see the game name, instructions, and board
* [x]as a player, i want to see my score
* as a player, i want to see the top score
* [x]as a player, i want my score to increase when i click on a new card

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

Dealing with the levels:
Examples I have seen just follow the example in class with just App, Wrapper,and Card components.

I have App with stateless Header, Instructions, Footer and Stateful(?) Gameboard and CardGrid and then the subcomponent Card.

While the inc score was on the IckyCard, the score increased per click. I just did that to test state. I do NOT think that is where I need to call the counter.

I believe that since counter goes up only if the card has been validated, that the function should be called in that validate fcn.

Before I messed things up, I was able to click on a card, send the id to the array in state and check for the array already having that id or not. I was thinking about how to call the inc and reset fcns within the validatePick fcn.

THEN i took a break and thought I should test the build thing. Just think about soething else. That broke it.
