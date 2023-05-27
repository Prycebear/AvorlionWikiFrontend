import "./RepoCard.css"
import { Link } from "react-router-dom"

function RepoCard(props){
    return(
        <Link id = "RepoCardCard" to={props.toLink}>
                <img src={props.imgSrc} alt = "RepoImg" id = "RepoImg"/>
                <h1>{props.name}</h1>
        </Link>
    )

}

export default RepoCard;