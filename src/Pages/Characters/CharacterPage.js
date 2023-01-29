import React, {useEffect, useState} from "react";
import useFetch from "../../Hooks/UseFetch";
import CharacterCard from "../../Components/CharacterCards/CharacterCard";
import "./CharacterPage.css"

const url = "http://localhost:8080/character"
const all = "all"
export const CharacterPage = () => {

    const [data] = useFetch(url+all)

    return (
        <div className="Character-Background">
            <CharacterCard />
        </div>
    )
}


