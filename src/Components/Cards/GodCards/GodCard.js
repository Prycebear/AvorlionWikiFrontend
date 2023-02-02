import React, {useEffect, useState} from "react";
import "./GodsCard.css"
import useFetch from "../../../Hooks/UseFetch";


export const GodCard = () => {
    const [data] = useFetch("http://localhost:8080/gods/all")

    return (
        <div className="GodWrap">
            {data &&
                data.map((item) => {
                    return <div className="GodCard" key={item.id}>
                        <div id="card-interior">

                            <div className="CardContent">
                                <h2 className="GodName">{item.name}</h2>
                                <ul className="GodDetails">
                                    <li id="domain"><h3>of the {item.domain}</h3></li>
                                    <li id="type"><h3>{item.type} God</h3></li>
                                </ul>
                                <p id="desc">{item.description}</p>
                            </div>
                        </div>
                        <div className="CharacterCardBack">
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


    export default GodCard;