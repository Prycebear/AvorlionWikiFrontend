import React, {useEffect, useState} from "react";
import "./CharacterCard.css"
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";




export const CharacterCard = () => {
    const [data] = useFetch("https://avorlionbackend.herokuapp.com/character/all")

    let imgSource = (imgSrc) => {
        if(imgSrc != null){
            return imgSrc;
        }else{
            return 'https://storage.googleapis.com/loveable.appspot.com/medium_dnd_gifts_63bff7355d/medium_dnd_gifts_63bff7355d.jpg'
        }
    }

    return (
        <div className="CharacterWrap">
            {data &&
                data.map((item) => {
                    return <div className="CharacterCard" key={item.id} to={{pathname: `/character/${item.id}`}}>

                        <Link id = 'CharCardLink' to={{pathname: `/character/${item.id}`}} className="CardButton">

                        <div className="CharacterImage">
                            <img id = 'CharImg'

                            src= {imgSource(item.imgLink)}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
                            }}
                            />
                        </div>
                        <div id="card-interior">
                            <div className="CardContent">
                                <h3 id = 'CharacterName'>{item.firstName} {item.surname}</h3>
                                <p id="Race">{item.race}</p>
                                <p id="desc">{item.shortDescription}</p>

                            </div>
                        </div>
                        </Link>
                    </div>


                })}
        </div>

    )
}




    export default CharacterCard;