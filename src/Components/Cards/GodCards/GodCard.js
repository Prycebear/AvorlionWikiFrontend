
import "./GodsCard.css"
import useFetch from "../../../Hooks/UseFetch";
import {Link} from "react-router-dom";


export const GodCard = () => {
    const [data] = useFetch("http://localhost:8080/gods/all")

    return (
        <div className="GodWrap">
            {data &&
                data.map((item) => {
                    return <div className="GodCard" key={item.id}>

                        <Link id='GodLink' to={{pathname: `/gods/${item.id}`}} className="CardButton">

                            <div className="GodSymbol">
                                <img alt='Character art'
                                    src={item.imgLink}
                                    onError={({currentTarget}) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = "https://southernpercussion.com/wp-content/uploads/2021/09/placeholder.png";
                                    }}
                                />
                            </div>
                            <div id="card-interior">
                                <div className="CardContent">
                                    <h4>{item.godLevel}</h4>
                                    <br/>
                                    <h3 className="GodName">{item.godsName}</h3>
                                    <h4>of the {item.godsDomain}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>


                })}
        </div>

    )
}


export default GodCard;
