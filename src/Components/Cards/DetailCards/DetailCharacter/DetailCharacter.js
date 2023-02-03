import React, {useEffect, useState} from "react";
import "./DetailCharacter.css"
import useFetch from "../../../../Hooks/UseFetch";



export const DetailCharacter = () => {
    const [data] = useFetch("http://localhost:8080/character/all")

    return (
        <div className="CharacterWrap">
                    return <div className="CharacterCard">
                        <div className="CharacterImage">
                            <img
                                src={data.imgLink}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
                                }}
                            />
                        </div>
                        <div id="card-interior">

                            <div className="CardContent">
                                <h3 className="CharacterName">{data.firstName}</h3>
                                <ul className="CharacterDetails">
                                    <li id="Race"><h3>{data.race}</h3></li>
                                    <li id="Role"><h3>{data.role}</h3></li>
                                </ul>
                                <p id="desc">{data.description}</p>
                            </div>
                        </div>

                    </div>
        </div>

    )
}


//     {data &&
//     data.map((item) => {
//         return <p key={item.id}>{item.title}</p>;
//     })}
// </>
// );
// };


export default DetailCharacter;