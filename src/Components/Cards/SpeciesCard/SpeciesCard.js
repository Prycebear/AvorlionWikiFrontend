
import "./SpeciesCard.css"
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";
import imageSourceNull from "../../../Functions/imageSourceNull";




export const SpeciesCard = () => {
    const [data] = useFetch("http://localhost:8080/species/all");



    return (
        <div className="SpeciesWrap">
            {data &&
                data.map((item) => {
                    return <div className="CharacterCard" key={item.speciesid}>

                        <Link id = 'SpeciesCardLink' to={{pathname: `/species/${item.speciesid}`}} className="CardButton">

                        <div className="SpeciesImage">
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
                                <h3 id = 'SpeciesName'>{item.speciesName}</h3>
                                <p id="Race">{item.speciesShortDescription}</p>
                            </div>
                        </div>
                        </Link>
                    </div>


                })}
        </div>

    )
}




    export default SpeciesCard;