const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendsCard 
      name={friendsList[0].name}
      image={friendsList[0].image}
      occupation={friendsList[0].occupation}
      location={friendsList[0].location}/>
  <FriendsCard 
      name={friendsList[1].name}
      image={friendsList[1].image}
      occupation={friendsList[1].occupation}
      location={friendsList[1].location}/>

    <FriendsCard 
      name={friendsList[2].name}
      image={friendsList[2].image}
      occupation={friendsList[2].occupation}
      location={friendsList[2].location}/>

{/* This is how we could reference the friendslist in ES6 */}
      <FriendsCard 
      {...friendsList[0]}/>
      <FriendsCard 
      {...friendsList[1]}/>
      <FriendsCard 
      {...friendsList[2]}/>

  </Wrapper>
);