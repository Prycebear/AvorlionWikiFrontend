import React, {useEffect, useState} from "react";
import "./GodsCard.css"
import useFetch from "../../../Hooks/UseFetch";


export const GodCard = () => {
    const [data] = useFetch("https://avorlionbackend.herokuapp.com/gods/all")

    return (
        <div className="GodWrap">
            {data &&
                data.map((item) => {
                    return <div className="GodCard" key={item.id}>
                        <div id="card-interior">
                            <div className="GodCardContent">
                                <h2 className="GodName">{item.name}</h2>
                                    <p id="domain"><h3>of the {item.domain}</h3></p>
                                    <p id="type"><h3>{item.type} God</h3></p>
                                <p id="desc">{item.shortDescription}</p>
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


export default GodCard;