import React from "react";
import "./DetailCharacter.css"
import useFetch from "../../../../Hooks/UseFetch";
import {useParams} from "react-router-dom";


export const DetailCharacter = () => {
    const {id} = useParams()
    const [data] = useFetch(`https://avorlionbackend.herokuapp.com/character/${id}`)

    return (
        <div className="DetailCharacter" key={data.id}>
            <h1>{data.firstName} {data.surname}</h1>

            <br/>
            <div className="DataMain">

                <div className="CharacterDescription">
                    <h2>Description</h2>
                    <p className="DetailDesc">{data.description}</p>
                    <br/>
                    <h2>History</h2>
                    <p className="DetailHist">{data.history}</p>
                </div>
                <div id="SideBarInfoCharacterDetails">
                    <img id="DetailPicture" src = {data.imgLink}/>
                        <h3>Born Location</h3>
                        <li>Born Location</li>
                        <h3>Born Date</h3>
                        <li>Born Date</li>
                        <h3>Death Location</h3>
                        <li>Death Location</li>
                        <h3>Death Date</h3>
                        <li>Death Date</li>
                        <h3>Home</h3>
                        <li>Home</li>
                        <h3>God</h3>
                        <li>God</li>
                        <h3>Affiliations</h3>
                        <li>Affiliations</li>
                        <h3>Alignment</h3>
                        <li>Alignment</li>
                </div>
            </div>

        </div>
    )
}


export default DetailCharacter;