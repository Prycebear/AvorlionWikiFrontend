import RepoCard from "../../Components/Cards/RepoCard/RepoCard";
import "./DataRepo.css"
import useFetch from "../../Hooks/UseFetch";

function DataRepo() {

    // function RandomId(repo) {
    //     const [data] = useFetch(repo);
    //     return Math.random(1, data.length);
    // };
    //
    // let imgId = RandomId("https://avorlionwikibackend-3712a5113557.herokuapp.com/characters/playercharacters/all");
    // const [data] = useFetch(`https://avorlionwikibackend-3712a5113557.herokuapp.com/characters/playercharacters/${imgId}`);


    return (
        <div id="RepoColumn">
            <RepoCard imgSrc="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png"
                      name="Characters" toLink="/character"></RepoCard>

            <RepoCard imgSrc="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png" name="Gods"
                      toLink="/gods"></RepoCard>

            <RepoCard imgSrc="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png"
                      name="Continents" toLink="/maps"></RepoCard>

            <RepoCard imgSrc="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png"
                      name="SubNations"></RepoCard>

            <RepoCard imgSrc="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png"
                      name="Locations"></RepoCard>

            <RepoCard imgSrc="https://live.staticflickr.com/65535/53253417276_768532ebf5_m.jpg" name="Species"
                      toLink="/species"></RepoCard>

            <RepoCard imgSrc="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png" name="Campaign"
                      toLink="/campaign"></RepoCard>


        </div>
    )
}

export default DataRepo;