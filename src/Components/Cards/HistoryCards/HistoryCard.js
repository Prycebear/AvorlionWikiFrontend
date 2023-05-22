
import "./CharacterCard.css"
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";
import imageSourceNull from "../../../Functions/imageSourceNull";




export const HistoryCard = () => {
    const [data] = useFetch("https://avorlionbackend.herokuapp.com/character/all")



    return (
        <div className="HistoryWrap">
            {data &&
                data.map((item) => {
                    return <div className="HistoryCard" key={item.id}>

                        <Link id = 'HistoryLink' to={{pathname: `/history/${item.id}`}} className="CardButton">
                        <div id="card-interior">
                            <h2 id = 'date'></h2>
                            <h3 id = 'Location'></h3>
                            <p id = 'ShortHistoryDesc'></p>

                        </div>
                        </Link>
                    </div>


                })}
        </div>

    )
}




    export default HistoryCard;