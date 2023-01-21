import React from "react";
import {useEffect} from "react";
import axios from "axios";


import "./CharacterCard.css"

const characterAll = "http://localhost:8080/character/all"

export default class CharacterCard extends React.Component {


    render() {


        return (

            <div className="CharacterCard">
                <h1 className="CharacterCard-Title">Josie Pullen</h1>
            </div>
        );

    }
}