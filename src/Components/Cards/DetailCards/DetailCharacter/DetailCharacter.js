import React from "react";
import "./DetailCharacter.css"
import useFetch from "../../../../Hooks/UseFetch";
import {useParams} from "react-router-dom";


export const DetailCharacter = () => {
    const {id} = useParams()
    const [data] = useFetch(`http://localhost:8080/characters/playercharacters/${id}`)

    return (
        <div className="DetailCharacter" key={data.characterid}>
            <h1 id = "DetailName">{data.characterFirstName} {data.characterLastName}</h1>

            <br/>
            <div id="DataMain">

                <div id="CharacterDescription">
                    <h2 id = "DetailHeading">Description</h2>
                    <p className="DetailDesc">{data.characterDescription}</p>
                    <br/>
                    <h2 id = "DetailHeading">History</h2>
                    <p className="DetailHist">Billima</p>
                </div>
                <div id="SideBarInfoCharacterDetails">
                    <img id="DetailPicture" src = {data.imgLink}/>
                        <h4>Born Location</h4>
                        <li>Born Location</li>
                        <h4>Born Date</h4>
                        <li>Born Date</li>
                        <h4>Death Location</h4>
                        <li>Death Location</li>
                        <h4>Death Date</h4>
                        <li>Death Date</li>
                        <h4>Home</h4>
                        <li>Home</li>
                        <h4>God</h4>
                        <li>God</li>
                        <h4>Affiliations</h4>
                        <li>Affiliations</li>
                        <h4>Alignment</h4>
                        <li>Alignment</li>
                </div>
            </div>

        </div>
    )
}


export default DetailCharacter;