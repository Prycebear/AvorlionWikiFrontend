import { useEffect, useState } from "react";
import CharacterList from "../Components/CharacterList/CharacterList";
import CharacterCard from "../Components/CharacterCards/CharacterCard";

export function useFetch (url){
    const [props, setProps] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProps(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    // return useFetch();
    //     <div className="App">
    //         <header className="App-header">
    //             <div className="App-intro">
    //                 {groups.map(group =>
    //                     <div key={group.id}>
    //                         <CharacterCard group ={group}/>
    //                     </div>
    //                 )}
    //             </div>
    //         </header>
    //     </div>
    // );
};

export default useFetch;