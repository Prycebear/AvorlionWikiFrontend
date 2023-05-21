import React, {useEffect, useState} from "react";
import "./GodsCard.css"
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";


export const GodCard = () => {
    const [data] = useFetch("https://avorlionbackend.herokuapp.com/gods/all")

    return (
        <div className="GodWrap">
            {data &&
                data.map((item) => {
                    return <div className="GodCard" key={item.id}>

                        <Link id='GodLink' to={{pathname: `/gods/${item.id}`}} className="CardButton">

                            <div className="GodSymbol">
                                <img
                                    src={item.imgLink}
                                    onError={({currentTarget}) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = "https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
                                    }}
                                />
                            </div>
                            <div id="card-interior">
                                <div className="CardContent">
                                    <h4>{item.type}</h4>
                                    <br/>
                                    <h3 className="GodName">{item.name}</h3>
                                    <h4>of the {item.domain}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>


                })}
        </div>

    )
}


export default GodCard;
