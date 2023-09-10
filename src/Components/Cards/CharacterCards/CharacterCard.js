
import "./CharacterCard.css"
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";
import imageSourceNull from "../../../Functions/imageSourceNull";




export const CharacterCard = () => {
    const [data] = useFetch("https://avorlionwikibackend-3712a5113557.herokuapp.com/characters/playercharacters/all");



    return (
        <div className="CharacterWrap">
            {data &&
                data.map((item) => {
                    return <div className="CharacterCard" key={item.characterId}>

                        <Link id = 'CharCardLink' to={{pathname: `/characters/playercharacters/${item.characterId}`}} className="CardButton">

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
                                <h3 id = 'CharacterName'>{item.characterFirstName} {item.characterLastName}</h3>
                                <p id="Race">{item.species_id}</p>
                                <p id="desc">{item.shortCharacterDescription}</p>

                            </div>
                        </div>
                        </Link>
                    </div>


                })}
        </div>

    )
}




    export default CharacterCard;