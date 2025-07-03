// import { zoneInfo, otherLocations } from '../globalVars';

export function Zones() {
    return(
        <>
        <div className="content">
            <p>Absolutely nothing is ready to be shown about zones, collectibles or anything. Come back when we're ready!</p>
        </div>
            {/* <h1 className="title is-1 sonic-title glitch">Zones</h1>
            <div className="content">
                <p>Sonic Shift presents <strong>eight</strong> zones throughout the game, not including a hub world and other special zones or locations.</p>
            </div>
            <div className="content">
                {
                    zoneInfo.map((zone, index) => (
                        <div key={index} className="content">
                            <h2 className="title is-3 sonic-title gold">{index + 1} - {zone.name}</h2>
                            <img className="image is-2by1" alt="" src="https://bulma.io/assets/images/placeholders/640x320.png" />
                            <p>{zone.description}</p>
                                {
                                    zone.collectibles && (
                                        <>
                                        <h3 className="title is-6 sonic-title">Collectibles</h3>
                                        <ul>
                                            {
                                                zone.collectibles.map((collectible, index) => (
                                                    <li key={index}>{collectible.name}: {collectible.number}</li>
                                                ))
                                            }
                                        </ul>
                                        </>
                                    )
                                }
                        </div>
                    ))
                }
            </div>
            <div className="content">
                <h1 className="title is-1 sonic-title">Other Locations</h1>
                {
                    otherLocations.map((location, index) => (
                        <div key={index} className="content">
                            <h2 className="title is-3 sonic-title gold">{location.name}</h2>
                            <p>{location.description}</p>
                            {
                                location.notableLocations && (
                                    <>
                                        <h3 className="title is-6 sonic-title">Notable Locations</h3>
                                        <ul>
                                            {
                                                location.notableLocations.map((loc, index) => (
                                                    <li key={index}>{loc}</li>
                                                ))
                                            }
                                        </ul>
                                    </>
                                )
                            }
                        </div>
                    ))
                }
            </div> */}
        </>
    )
}