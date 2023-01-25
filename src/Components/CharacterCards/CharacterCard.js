import React, {useEffect, useState} from "react";
import useFetch from "../../Hooks/CharacterFetch";

import "./CharacterCard.css"



export const CharacterCards = ({group}) => {


    return (
        <div className="CharacterCard">
            <img src="https://rare-gallery.com/uploads/posts/1190346-Kim-Sung-Hwan-drawing-men-Paladin-warrior-armor.jpg"/>
            <div id="card-interior">

                <div className="CardContent">
                    <h2 className="CharacterName">{group.firstName}</h2>
                    <h2 className="Nickname">{group.nickname}</h2>
                    <ul className="CharacterDetails">
                        <li id="Race">{group.race}</li>
                        <li id = "Role">{group.role}</li>
                    </ul>
                    <p id = "desc">{group.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CharacterCards;