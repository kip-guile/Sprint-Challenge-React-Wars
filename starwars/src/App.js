import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Person from './components/Persons';

const starWarsApi = 'https://swapi.co/api/people/';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWarsState, setStarWarsSate] = useState([]);
  const [count, setCount] = React.useState(1)

  useEffect(() => {
    axios.get(starWarsApi)
      .then(response => {
        const block = response.data.results;
        setStarWarsSate(block);
        setCount(2);
        console.log(starWarsState);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [count]);

  return (
    starWarsState.map(person =>
    <div className="App">
      <Person name = {person.name} height = {person.height} mass = {person.mass} dob = {person.birth_year} gender ={person.gender} hair = {person.hair_color} skin = {person.skin_color} eye = {person.eye_color}/>
    </div>
    )
  );
}

export default App;
