import React, {useEffect, useState} from "react";
import "./Maps.css"
import ContinentCard from "../../../Components/Cards/LocationCards/ContinentCards/ContinentCard";
import NationCard from "../../../Components/Cards/LocationCards/NationCards/NationCard";


export const Maps = () => {
    const [location, setLocation] = useState('Continent')

    return (
        <div className="MainPost">
            <div className="OptionElement">
                <h2>What would you like to See?</h2>
                <div className="LocationButtons">
                    <button onClick={() => setLocation('Continent')}>Continent</button>
                    <button onClick={() => setLocation('Nation')}>Nation</button>
                    <button onClick={() => setLocation('SubNation')}>SubNation</button>
                    <button onClick={() => setLocation('Location')}>Location</button>

                </div>
                <div className="LocationSheet">
                    {location === 'Continent' && (
                        <ContinentCard />
                    )}

                    {location === 'Nation' && (
                        <NationCard/>
                    )}

                    {location === 'SubNation' && (
                        <ContinentCard/>
                    )}

                    {location === 'Location' && (
                        <ContinentCard/>
                    )}



                </div>
            </div>
        </div>

    )
}

export default Maps;


