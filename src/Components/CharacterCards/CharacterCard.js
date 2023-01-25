import React, {useEffect, useState} from "react";
import useFetch from "../../Hooks/UseFetch";

import "./CharacterCard.css"



export const CharacterCards = ({groups}) => {


    return (
        <div className="CharacterCard">
            <img src="https://rare-gallery.com/uploads/posts/1190346-Kim-Sung-Hwan-drawing-men-Paladin-warrior-armor.jpg"/>
            <div id="card-interior">

                <div className="CardContent" key={groups.id}>
                    <h2 className="CharacterName">{groups.firstName}</h2>
                    <h2 className="Nickname">{groups.nickname}</h2>
                    <ul className="CharacterDetails">
                        <li id="Job">{groups.role}</li>
                    </ul>
                    {/*<p id="description">{group.description}</p>*/}

                </div>)}
            </div>
        </div>
    );
};

export default CharacterCards;