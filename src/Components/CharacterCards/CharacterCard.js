import React, {useEffect, useState} from "react";
import "./CharacterCard.css"
import useFetch from "../../Hooks/UseFetch";


export const CharacterCard = () => {
    const [data] = useFetch("http://localhost:8080/character/all")

    return (
        <div>
            {data &&
                data.map((item) => {
                    return <div className="CharacterCard" key={item.id}>
                        <img
                            src={item.imglink}/>
                        <div id="card-interior">

                            <div className="CardContent">
                                <h2 className="CharacterName">{item.firstName}</h2>
                                <ul className="CharacterDetails">
                                    <li id="Race"><h3>{item.race}</h3></li>
                                    <li id="Role"><h3>{item.role}</h3></li>
                                </ul>
                                <p id="desc">{item.description}</p>
                            </div>
                        </div>
                    </div>
                })}
        </div>
    )
}


//     {data &&
//     data.map((item) => {
//         return <p key={item.id}>{item.title}</p>;
//     })}
// </>
// );
// };


    export default CharacterCard;