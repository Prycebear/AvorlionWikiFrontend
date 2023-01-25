import { useEffect, useState } from "react";
import CharacterCard from "../Components/CharacterCards/CharacterCard";

export function characterFetch (url){
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch("http://localhost:8080/character/all")
            .then(response => response.json())
            .then(data => {
                setGroups(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-intro">
                    {groups.map(group =>
                        <div key={group.id}>
                            <CharacterCard group ={group}/>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default characterFetch;