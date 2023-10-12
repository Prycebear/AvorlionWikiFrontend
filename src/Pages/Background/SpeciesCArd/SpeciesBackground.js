import useFetch from "../../../Hooks/UseFetch";
import {Link, useParams} from "react-router-dom";
import imageSourceNull from "../../../Functions/imageSourceNull";


export const SpeciesCard = () => {

    const {id} = useParams()
    const [data] = useFetch(`https://avorlionwikibackend-3712a5113557.herokuapp.com/species/speciesid/${id}`);


    return (
        <div className="DetailCharacter" key={data.characterid}>
            <Link id='SpeciesCardLink' to={{pathname: `/species/${data.speciesid}`}} className="CardButton">

                <div className="SpeciesImage">
                    <img id='CharImg'
                         alt='Whatever youre expecting'
                         src={imageSourceNull(data.speciesImgLink)}
                         onError={({currentTarget}) => {
                             currentTarget.onerror = null;
                             currentTarget.src = "https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
                         }}
                    />
                </div>
                <div id="card-interior">
                    <div className="CardContent">
                        <h3 id='SpeciesName'>{data.speciesName}</h3>
                        <p id="Race">{data.speciesShortDescription}</p>
                    </div>
                </div>
            </Link>
        </div>
        )
}


export default SpeciesCard;