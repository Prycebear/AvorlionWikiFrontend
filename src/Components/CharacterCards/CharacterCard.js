import React from "react";
import {useEffect} from "react";
import useFetch from "../../Hooks/UseFetch";
import data from "bootstrap/js/src/dom/data";

import "./CharacterCard.css"


const characterAll = "http://localhost:8080/character/1"



const CharacterCards = ({group}) => {



    return (
        <div className="CharacterCard">
            <img src="https://rare-gallery.com/uploads/posts/1190346-Kim-Sung-Hwan-drawing-men-Paladin-warrior-armor.jpg"/>
            <div id="card-interior">
                <div className="CardContent">
                    <h1>{group.id}</h1>
                    <h2 className="CharacterName">{group.firstName}</h2>
                    <h2 className="Nickname">{group.nickname}</h2>
                    <ul className="CharacterDetails">
                        <li id="Job">{group.role}</li>
                    </ul>
                    {/*<p id="description">{group.description}</p>*/}
                </div>
            </div>
        </div>
    );
};

export default CharacterCards;