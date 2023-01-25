import "./CharacterCardBody.css"
import useFetch from "../../../Hooks/CharacterFetch";
import UseFetch from "../../../Hooks/CharacterFetch";

export function CharacterCardBody(){

    let dataSource = "http://localhost:8080/character/all";


    return (
        <div>
            <UseFetch/>
        </div>
    )


}

export default CharacterCardBody;