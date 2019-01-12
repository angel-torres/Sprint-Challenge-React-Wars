import React from 'react';
import './StarWars.css';

const Character = (props) => {
    return (
        <div className="character-container">
            <h1>{props.character.name}</h1>
            <div className="attribute"><h2>Birth Year:</h2> {props.character.birth_year}</div>
            <div className="attribute"><h2>Eye Color:</h2> {props.character.eye_color}</div>
            <div className="attribute"><h2>Gender:</h2> {props.character.gender}</div>
            <div className="attribute"><h2>Hair Color:</h2> {props.character.hair_color}</div>
            <div className="attribute"><h2>Heigth:</h2> {props.character.height}</div>
            <div className="attribute"><h2>Mass:</h2> {props.character.mass}</div>
            <div className="attribute"><h2>Skin Color:</h2> {props.character.skin_color}</div>
            <div className="films attribute"><h2>Films:</h2> {props.character.films.map(film => {
                return (
                    <p className="film">{film}</p>
                )
            })}</div>
        </div>
    )
}

export default Character;