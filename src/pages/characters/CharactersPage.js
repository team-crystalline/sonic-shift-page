import { useParams } from "react-router-dom";
import { CharacterNav } from "./CharacterNav";
import { charactersData } from "../../globalVars"; 
import { NotFound } from "../NotFound";

export const CharactersPages = () => {
    const { name } = useParams();
    const character = charactersData.find((char) => char.url.toLowerCase() === name.toLowerCase()) || charactersData.find((char) => char.url.toLowerCase() === name.toLowerCase());

    if (!character) {
        return < NotFound />;
    }

    return (
        <>
        <CharacterNav/>
        <img className="pulsate" src={`/images/characters/${character.name.split(" ")[0].toLowerCase()}-silo.png`} alt="Background Image - Prev" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            objectFit: 'contain',
            opacity: character.name === 'Shadow the Hedgehog' ? .45 : .15,
            zIndex: -1,
        }} />
        <div class="container">
            <h1 class={`title is-3 ${character.url}`}>{character.name}</h1>
            <img src={character.icon} alt={character.name} className="smallimage"/>
            <table class="table">
                <thead>
                    <tr>
                       <th>Playable</th>
                       <th>Ability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{character.playable ? '✅': '❌'}</td>
                        <td>{character.ability}</td>
                    </tr>
                </tbody>
            </table>
            <div className="content">
                {
                    character.charBio.map((bio, index) => (
                        <p key={index} className="block text-indent">{bio}</p>
                    ))
                }
            </div>
            <hr/>
        </div>
        </>
    );
};
