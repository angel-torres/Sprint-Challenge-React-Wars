import React from 'react';
import './StarWars.css';

const Character = (props) => {
    return (
        <div>
            <h1>Name: {props.character.name}</h1>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Eye Color: {props.character.eye_color}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Heigth: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
            <p>Skin Color: {props.character.skin_color}</p>
        </div>
    )
}

export default Character;