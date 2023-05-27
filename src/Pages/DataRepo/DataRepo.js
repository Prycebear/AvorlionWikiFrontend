import RepoCard from "../../Components/Cards/RepoCard/RepoCard";
import "./DataRepo.css"

function DataRepo() {

    return (
        <div id = "RepoColumn">
                <RepoCard link = "/character" imgSrc ="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png" name = "1l"></RepoCard>
                <RepoCard link = "/character" imgSrc ="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png" name = "2l"></RepoCard>
                <RepoCard link = "/character" imgSrc ="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png" name = "3l"></RepoCard>
                <RepoCard link = "/character" imgSrc ="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png" name = "1r"></RepoCard>
                <RepoCard link = "/character" imgSrc ="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png" name = "2r"></RepoCard>
                <RepoCard link = "/character" imgSrc ="https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png" name = "3r"></RepoCard>
        </div>
    )
}

export default DataRepo;