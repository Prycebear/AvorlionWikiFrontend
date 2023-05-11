import React, {useEffect, useState} from "react";
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";


export const ContinentCard = () => {
    const [data] = useFetch("https://avorlionbackend.herokuapp.com/continent/all")


    return (
        <div className="ContinentWrap">
            {data &&
                data.map((item) => {
                    return <div className="ContinentCard" key={item.id}>

                        <div className="ContinentImage">
                            <img
                                src={item.image}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
                                }}
                            />
                        </div>
                        <div id="card-interior">

                            <div className="CardContent">
                                <h3 className="ContinentName">{item.name}</h3>
                                <ul className="ContinentNations">
                                    <li id="nations"><h3>{item.name}</h3></li>
                                </ul>
                                <p id="desc">{item.description}</p>
                                {/*<Link to={{pathname: `/character/${item.id}`}} className="btn btn-primary">Button</Link>*/}
                            </div>
                        </div>
                    </div>


                })}
        </div>

    )
}




export default ContinentCard;