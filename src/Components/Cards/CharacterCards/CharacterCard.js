import React, {useEffect, useState} from "react";
import "./CharacterCard.css"
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";


export const CharacterCard = () => {
    const [data] = useFetch("https://avorlionbackend.herokuapp.com/character/all")


    return (
        <div className="CharacterWrap">
            {data &&
                data.map((item) => {
                    return <div className="CharacterCard" key={item.id}>

                        <div className="CharacterImage">
                        <img
                            src={item.imgLink}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
                            }}
                        />
                        </div>
                        <div id="card-interior">

                            <div className="CardContent">
                                <h3 className="CharacterName">{item.firstName} {item.surname}</h3>
                                <ul className="CharacterDetails">
                                    <li id="Race"><h3>{item.race}</h3></li>
                                </ul>
                                <p id="desc">{item.shortDescription}</p>
                                <Link to={{pathname: `/character/${item.id}`}} className="btn btn-primary">Button</Link>
                            </div>
                        </div>
                    </div>


                })}
        </div>

    )
}




    export default CharacterCard;