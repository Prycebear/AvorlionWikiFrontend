import "./RepoCard.css"


function RepoCard(props){
    return(
        <div id = "RepoCardCard">
                <img src={props.imgSrc} alt = "RepoImg" id = "RepoImg"/>
                <h1>{props.name}</h1>
        </div>
    )

}

export default RepoCard;