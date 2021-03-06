import React from 'react';
import Character from './Character'
import './StarWars.css';

function CharacterList(props) {
    return (
        <div>
            {props.starwarsChars.map((character) => {
                return <Character character={character}/>
            })}
        </div>
    )
}

export default CharacterList;