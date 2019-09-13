import React from 'react';
import styled from 'styled-components';

const StyledPerson = styled.div`
  padding: 1em;
  margin: 2em;
  border: 0.5em solid rebeccapurple;
  border-radius: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
      color: red;
  }

  .bio {
    display: flex;
  }

  .details{
      display: flex;
  }

  p {
      font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 1em;
      padding: 0.5em;
      margin: 0.3em;
      color: royalblue;
  }

  
`

const Person = (props) => {
    const {name, height, mass, dob, gender, hair, skin, eye} = props;

    return <StyledPerson>
        <h1>{name}</h1>
        <div className="bio">
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Birth year: {dob}</p>
            <p>Gender: {gender}</p> 
        </div>
        <div className="details">
            <p>Hair color: {hair}</p>
            <p>Skin color: {skin}</p>
            <p>Eye color: {eye}</p> 
        </div>
    </StyledPerson>
}

export default Person;