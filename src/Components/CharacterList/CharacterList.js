import useFetch from "../../Hooks/UseFetch";
import React from "react";
import CharacterCard from "../CharacterCards/CharacterCard";

import "./CharacterList.css"

const CharacterList = () => {


    return (
        <div className="CharacterList">
            <span id="line">
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            </span>

        </div>
    );
};

export default CharacterList;