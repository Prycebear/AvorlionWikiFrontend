import React, {useEffect, useState} from "react";
import "./CharacterPost.css"
import useFetch from "../../../Hooks/UseFetch";


export const CharacterPost = () => {
    const [character_first_name, setCharacter_first_name] = useState("");
    const [character_last_name, setCharacter_last_name] = useState("");
    // const [nickname, setNickname] = useState("");
    const [species_id, setSpecies_id] = useState("");
    const [gods_id, setGods_id] = useState("");
    const [short_character_description, setShort_character_description] = useState("");
    const [character_description, setCharacter_description] = useState("");
    const [campaign_id, setCampaign_id] = useState("");
    const [character_image_link, setCharacter_image_link] = useState("");
    const [user_id, setUser_id] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch("http://localhost:8080/characters/playercharacters/add", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    character_first_name: character_first_name,
                    character_last_name:character_last_name,
                    short_character_description:short_character_description,
                    character_description:character_description,
                    character_image_link:character_image_link,
                    species_id:species_id,
                    gods_id:gods_id,
                    campaign_id:campaign_id,
                    user_id:user_id


                }),
            });
            //let resJson = await res;
            if (res.status === 200) {
                setCharacter_first_name("");
                setCharacter_last_name("");
                setShort_character_description("");
                setCharacter_description("");
                setCharacter_image_link("");
                setSpecies_id("");
                setGods_id("");
                setCampaign_id("");
                setUser_id("3");

            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
            return alert("Nah, no beuno on the posterino")
        }
        return alert("New character succesfully added broski!")
    };

    const [speciesData] = useFetch("https://avorlionwikibackend-3712a5113557.herokuapp.com/species/all")
    const [campaignData] = useFetch("https://avorlionwikibackend-3712a5113557.herokuapp.com/campaign/all")
    const [godsData] = useFetch("https://avorlionwikibackend-3712a5113557.herokuapp.com/gods/all")

    return (
        <div className="CharacterPost">
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" id="firstName" name="firstName" value={character_first_name}
                       onChange={(e) => setCharacter_first_name(e.target.value)}/>
                <br/>
                <label>Surname:</label>
                <input type="text" id="surname" name="surname" value={character_last_name}
                       onChange={(e) => setCharacter_last_name(e.target.value)}/>
                <br/>
                <label>Species:</label>
                <br/>
                <select value={species_id} onChange={(e) => setSpecies_id(e.target.value)}>
                    {speciesData &&
                        speciesData.map((item) => {
                            return <option value = {item.species_id}>{item.speciesName}</option>
                        })}
                    <option value="none">None</option>
                </select>
                <label>Class:</label>
                <br/>
                {/*<select value={role} onChange={(e) => setRole(e.target.value)}>*/}
                {/*    //todo: Generate from backend.*/}
                {/*    <option value="Warrior">Warrior</option>*/}
                {/*    <option value="Paladin">Paladin</option>*/}
                {/*    <option value="Ranger">Ranger</option>*/}
                {/*    <option value="Rogue">Rogue</option>*/}
                {/*    <option value="Cleric">Cleric</option>*/}
                {/*    <option value="Wizard">Wizard</option>*/}
                {/*    <option value="Sorcerer">Sorcerer</option>*/}
                {/*    <option value="Warlock">Warlock</option>*/}
                {/*    <option value="Bard">Bard</option>*/}
                {/*    <option value="Monk">Monk</option>*/}
                {/*    <option value="">None</option>*/}
                {/*</select>*/}
                <label>Short Description:</label>
                <input type="text" id="shortdescription" name="shortdescription" value={short_character_description}
                       onChange={(e) => setShort_character_description(e.target.value)}/>
                <label>Description:</label>
                <br/>
                <textarea type="text" id="description" name="description" value={character_description}
                          onChange={(e) => setCharacter_description(e.target.value)}/>
                <br/>
                <br/>
                <label>Campaign:</label>
                <br/>
                <select value={campaign_id} onChange={(e) => setCampaign_id(e.target.value)}>
                    {campaignData &&
                        campaignData.map((item) => {
                            return <option value = {item.campaignId}>{item.campaignName}</option>
                        })}
                    <option value="none">None</option>
                </select>

                <br/>
                <label>God:</label>
                <br/>
                <select value={gods_id} onChange={(e) => setGods_id(e.target.value)}>
                    {godsData &&
                        godsData.map((item) => {
                            return <option value = {item.groupId}>{item.godsName}</option>
                        })}
                    <option value="none">None</option>
                </select>

                <label>Image link:</label>
                <input type="text" id="image" name="image" value={character_image_link} onChange={(e) => setCharacter_image_link(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </div>)


}



