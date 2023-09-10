import React, {useEffect, useState} from "react";
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";
import imageSourceNull from "../../../Functions/imageSourceNull";


export const CampaignCard = () => {
        const [data] = useFetch("https://avorlionwikibackend-3712a5113557.herokuapp.com/campaign/all")


        return (
            <div className="CampaignWrap">
                {data &&
                    data.map((item) => {
                        return <div className="CharacterCard" key={item.campaignId}>

                            <Link id = 'CharCardLink' to={{pathname: `/characters/playercharacters/${item.campaignId}`}} className="CardButton">

                                <div className="CharacterImage">
                                    <img id = 'CharImg'
                                         alt = 'Whatever youre expecting'
                                         src= {imageSourceNull(item.characterImageLink)}
                                         onError={({ currentTarget }) => {
                                             currentTarget.onerror = null;
                                             currentTarget.src="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
                                         }}
                                    />
                                </div>
                                <div id="card-interior">
                                    <div className="CardContent">
                                        <h3 id = 'CharacterName'>{item.campaignName}</h3>
                                        <p id="Race">{item.campaignType}</p>

                                    </div>
                                </div>
                            </Link>
                        </div>


                    })}
            </div>
        );
}

export default CampaignCard;

