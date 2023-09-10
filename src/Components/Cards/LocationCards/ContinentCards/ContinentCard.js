import React, {useEffect, useState} from "react";
import useFetch from "../../../../Hooks/UseFetch";
import {Link} from "react-router-dom";
import "./ContinentCard.css"
import imageSourceNull from "../../../../Functions/imageSourceNull";


export const ContinentCard = () => {
    const [data] = useFetch("https://avorlionwikibackend-3712a5113557.herokuapp.com/location/continent/all")


    return (
        <div className="ContinentWrap">
            {data &&
                data.map((item) => {
                    return <div className="ContinentCard" key={item.locationsId}>

                        <Link id='ContinentCardLink' to={{pathname: `/continent/${item.locationsId}`}} className="CardButton">

                            <div>
                                <img id = "ContinentImage"
                                    src={imageSourceNull()}
                                    onError={({currentTarget}) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = "https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
                                    }}
                                />
                            </div>
                            <div id="ContinentCardInterior">
                                <div className="CardContent">
                                    <h3 id = 'ContinentName' className="ContinentName">{item.locationName}</h3>
                                    <p>{item.shortLocationDescription}</p>
                                </div>
                            </div>
                        </Link>
                    </div>


                })}
        </div>

    )
}


export default ContinentCard;