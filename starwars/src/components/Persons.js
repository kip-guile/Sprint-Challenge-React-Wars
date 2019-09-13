import React from 'react';

const Person = (props) => {
    const {name, height, mass, dob, gender, hair, skin, eye} = props;

    return <div>
        <h1>{name}</h1>
        <div>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Birth year: {dob}</p>
            <p>Gender: {gender}</p> 
        </div>
        <div>
            <p>Hair color: {hair}</p>
            <p>Skin color: {skin}</p>
            <p>Eye color: {eye}</p> 
        </div>
    </div>
}

export default Person;