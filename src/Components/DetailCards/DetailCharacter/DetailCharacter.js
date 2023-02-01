import React, {useEffect, useState} from "react";
import "./DetailCharacter.css"
import useFetch from "../../../Hooks/UseFetch";



export const DetailCharacter = () => {
    const [data] = useFetch("http://localhost:8080/character/1")

    return (
        <div className="CharacterWrap">
            {data &&
                data.map((item) => {
                    return <div className="CharacterCard" key={item.id}>
                        <div className="CharacterImage">
                            <img
                                src={item.imgLink}/>
                        </div>
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
                        <div className="CharacterCardBack">
                        </div>
                    </div>


                })}
        </div>

    )
}




export default DetailCharacter;