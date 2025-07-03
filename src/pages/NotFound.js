import { Link } from "react-router-dom";
export function NotFound(){
    return (
        <>
            <h1 class="title is-1 sonic-title glitch">
                Oh no! 404!
            </h1>
            <h2 class="subtitle is-3">The page you're looking for doesn't exist.</h2>
            <p>Got here by accident? <Link to="/">Go home.</Link></p>
        </>
    )
}