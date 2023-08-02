
import "./CharacterCard.css"
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";
import imageSourceNull from "../../../Functions/imageSourceNull";




export const CharacterCard = () => {
    const [data] = useFetch("https://avorlionbackend.herokuapp.com/character/all");



    return (
        <div className="CharacterWrap">
            {data &&
                data.map((item) => {
                    return <div className="CharacterCard" key={item.id}>

                        <Link id = 'CharCardLink' to={{pathname: `/character/${item.id}`}} className="CardButton">

                        <div className="CharacterImage">
                            <img id = 'CharImg'
                            alt = 'Whatever youre expecting'
                            src= {imageSourceNull(item.imgLink)}
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