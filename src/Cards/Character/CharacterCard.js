import React from "react";
import {useEffect} from "react";
import useFetch from "../../Hooks/UseFetch";


import "./CharacterCard.css"

const characterAll = "http://localhost:8080/character/1"

const Jokes = () => {
    const url = characterAll;
    const { data, loading, error } = useFetch(url);

    if (loading) return (
        <div>Loading...</div>
    )

    return (
        <div>
            {error && <div>{error}</div>}
            {data && <div>{<div>{data}</div>}</div>}
        </div>
    );
};

export default Jokes;