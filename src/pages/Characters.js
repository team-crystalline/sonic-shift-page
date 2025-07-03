import { charactersData, toProperCase } from '../globalVars';
import {Link} from "react-router-dom";
export function Characters() {

    return (
        <>
            <h1 class="title is-1 sonic-title glitch">Characters</h1>
            <div class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    {charactersData.map((char) => (
                        <li key={char.url}><Link to={`/characters/${char.url}`}>{toProperCase(char.url)}</Link></li>
                    ))}
                </ul>
            </div>
            
        </>
    );
}
