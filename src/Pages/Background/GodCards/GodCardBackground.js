import React, {useEffect, useState} from "react";

import CharacterCard from "../../../Components/Cards/CharacterCards/CharacterCard";
import "./GodCardBackground.css"
import GodCard from "../../../Components/Cards/GodCards/GodCard";

export const GodCardBackground = () => {


    return (
        <div className="Card-Background">
            <GodCard />
        </div>
    )
}


