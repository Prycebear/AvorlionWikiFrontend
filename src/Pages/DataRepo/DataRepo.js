import RepoCard from "../../Components/Cards/RepoCard/RepoCard";
import "./DataRepo.css"

function DataRepo() {

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

            <RepoCard imgSrc="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png" name="Species"
                      toLink="/species"></RepoCard>

            <RepoCard imgSrc="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png" name="Campaign"
                      toLink="/campaign"></RepoCard>


        </div>
    )
}

export default DataRepo;