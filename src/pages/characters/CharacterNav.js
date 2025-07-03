import { charactersData, toProperCase } from '../../globalVars';
import { Link } from "react-router-dom";
export function CharacterNav(){
    return (
        <>
        <div class="breadcrumb" aria-label="breadcrumbs">
        <h1 class="title is-1 sonic-title glitch">Characters</h1>
            <ul>
                {
                charactersData.map((char)=>{
                    return <li key={char.url}><Link to={`/characters/${char.url}`}>{toProperCase(char.url)}</Link></li>
                })
                }
            </ul>
        </div>
        </>
    );
}