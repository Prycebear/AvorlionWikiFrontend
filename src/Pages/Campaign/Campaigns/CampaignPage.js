import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";
import imageSourceNull from "../../../Functions/imageSourceNull";


export const CampaignPage = () => {
    const [data] = useFetch("http://localhost:8080/campaign/all");



    return (
        <div className="CampaignCardWrap">
            {data &&
                data.map((item) => {
                    return <div className="CampaignCard" key={item.campaignId}>

                        <Link id = 'CampaignCardLink' to={{pathname: `/campaign/${item.campaignId}`}} className="CardButton">

                            <div className="CampaignImage">
                                <img id = 'CampaignImg'
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
                                    <h3 id = 'CharacterName'>{item.campaignName}</h3>
                                    <p id="Race">{item.campaignType}</p>

                                </div>
                            </div>
                        </Link>
                    </div>


                })}
        </div>

    )
}




export default CampaignPage;