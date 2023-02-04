import React from "react";
import "./DetailCharacter.css"
import useFetch from "../../../../Hooks/UseFetch";
import {useParams} from "react-router-dom";


export const DetailCharacter = () => {
    const {id} = useParams()
    const [data] = useFetch(`http://localhost:8080/character/${id}`)

    return (
        <div className="DetailCharacter" key={data.id}>
            <h1>{data.firstName}</h1>
            <div className="DataMain">

                <div className="CharacterDescription">
                    <p className="DetailDesc">{data.description}</p>
                    <br/>
                    <p className="DetailHist">{data.history}</p>
                </div>
                <div className="SideBarInfoCharacterDetails">
                    <img className="DetailPicture" src = {data.imgLink}/>
                    <ul>
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

                    </ul>
                </div>
            </div>

        </div>
        // <div className="CharacterWrap">
        //             <div className="CharacterCard">
        //                 <div className="CharacterImage">
        //                     <img
        //                         src={data.imgLink}
        //                         onError={({ currentTarget }) => {
        //                             currentTarget.onerror = null; // prevents looping
        //                             currentTarget.src="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
        //                         }}
        //                         alt="MainPic"
        //                     />
        //                 </div>
        //                 <div id="card-interior">
        //
        //                     <div className="CardContent">
        //                         <h3 className="CharacterName">{data.firstName}</h3>
        //                         <ul className="CharacterDetails">
        //                             <li id="Race"><h3>{data.race}</h3></li>
        //                             <li id="Role"><h3>{data.role}</h3></li>
        //                         </ul>
        //                         <p id="desc">{data.description}</p>
        //                     </div>
        //                 </div>
        //
        //             </div>
        // </div>

    )
}


export default DetailCharacter;