import React, {useEffect, useState} from "react";
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";




export const CampaignCard = () => {
    const [data] = useFetch("https://avorlionbackend.herokuapp.com/character/all")


    return (
        <div className="CampaignCard">
        </div>

    )
}




export default CampaignCard;