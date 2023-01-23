import React from "react";
import {useEffect} from "react";
import useFetch from "../../Hooks/UseFetch";


import "./CharacterCard.css"

const characterAll = "http://localhost:8080/character/1"

const Jokes = () => {
    const url = characterAll;
    const {data, loading, error} = useFetch(url);
    const useThis = "{error && <div>{error}</div>}\n            {data && <div>{<div>{data}</div>}</div>}";

    if (loading) return (
        <div>Loading...</div>
    )

    return (
        <div className="CharacterCard">
            <img src="https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            <div id="card-interior">
                <div className="CardContent">
                    <h2 className="CharacterName">Josie Pullen</h2>
                    <h2 className="Nickname"></h2>
                    <ul className="CharacterDetails">
                        <li id="Job">Pig</li>
                        <li id="Background">Swen</li>
                    </ul>
                    <p id="description">A big lovely hoggo</p>
                </div>
            </div>
        </div>
    );
};

export default Jokes;