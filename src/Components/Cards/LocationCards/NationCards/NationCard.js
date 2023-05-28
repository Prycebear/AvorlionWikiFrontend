import React, {useEffect, useState} from "react";
import useFetch from "../../../../Hooks/UseFetch";
import {Link} from "react-router-dom";
import "./NationCard.css"
import imageSourceNull from "../../../../Functions/imageSourceNull";


export const NationCard = () => {
    const [data] = useFetch("https://avorlionbackend.herokuapp.com/nation/all")


    return (
        <div className="NationWrap">
            {data &&
                data.map((item) => {
                    return <div className="NationCard" key={item.id}>

                        <Link id='NationCardLink' to={{pathname: `/Nation/${item.id}`}} className="CardButton">

                            <div id = "imageDiv">
                                <img  id ="NationImage"
                                    src={imageSourceNull(item.image)}
                                    onError={({currentTarget}) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = "https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
                                    }}
                                />
                            </div>
                            <div id="NationCardInterior">
                                <div className="NationCardContent">
                                    <h3 id = 'NationName' className="NationName">{item.name}</h3>
                                </div>
                            </div>
                        </Link>
                    </div>


                })}
        </div>

    )
}


export default NationCard;