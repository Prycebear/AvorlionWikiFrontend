import React, {useEffect, useState} from "react";
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";


export const CampaignCard = () => {
        const [data] = useFetch("https://avorlionbackend.herokuapp.com/character/all")


        return (
            <Link to="">
                    <img src="null"/>
                    <h1>Title</h1>
                    <h2>Chapter</h2>
                    <h3>Date</h3>
                    <h3>Location</h3>
            </Link>
        );
}

export default CampaignCard;

