import React, {useEffect, useState} from "react";
import "./GodPost.css"


export const GodPost = () => {
    const [name, setName] = useState("");
    const [domain, setDomain] = useState("");
    const [type, setType] = useState("");
    const [role, setRole] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [history, setHistory] = useState("");
    const [goals, setGoals] = useState("");
    const [myths, setMyths] = useState("");
    const [churchStructure, setChurchStructure] = useState("");
    const [divineRelationship, setDivineRelationship] = useState("");

    let handleGodSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://avorlionbackend.herokuapp.com/gods/add", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    domain: domain,
                    type: type,
                    shortDescription: shortDescription,
                    history: history,
                    description: description,
                    role: role,
                    goals: goals,
                    myths: myths,
                    churchStructure: churchStructure,
                    divineRelationship: divineRelationship

                }),
            });
            //let resJson = await res;
            if (res.status === 200) {
                setName("");
                setDomain("");
                setType("");
                setRole("");
                setShortDescription("");
                setDescription("");
                setHistory("");
                setGoals("");
                setMyths("");
                setChurchStructure("");
                setDivineRelationship("");
            } else {
                console.log(res);
                return alert("Nah, no beuno on the posterino")
            }
        } catch (err) {
            console.log(err);
            return alert("Nah, no beuno on the posterino")
        }
        return alert("New character succesfully added broski!")
    };




    return (
        <div className="GodPost">
            <form onSubmit= {handleGodSubmit}>
                <label>Name:</label>
                <input type="text" id="name" name="name" value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <br/>
                <label>Domain:</label>
                <input type="text" id="domain" name="domain" value={domain}
                       onChange={(e) => setDomain(e.target.value)}/>
                <br/>
                <label>Type:</label>
                <br/>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Greater Deity">Greater Deity</option>
                    <option value="Deity">Deity</option>
                    <option value="Lesser Deity">Lesser Deity</option>
                    <option value="Demigods">Demigods</option>
                    <option value="Hall of Heroes">Hall of Heroes</option>
                </select>
                <br/>
                <label>Short Description:</label>
                <input type = "text" id = "shortdescription" name = "shortdescription" value={shortDescription}
                       onChange={(e) => setShortDescription(e.target.value)}/>
                <label>Description:</label>
                <input type="text" id="description" name="description" value={description}
                       onChange={(e) => setDescription(e.target.value)}/>
                <br/>
                <label>Role:</label>
                <input type="text" id="role" name="role" value={role}
                       onChange={(e) => setRole(e.target.value)}/>
                <br/>
                <label>History:</label>
                <input type="text" id="history" name="history" value={history}
                       onChange={(e) => setHistory(e.target.value)}/>
                <br/>
                <label>Goals:</label>
                <input type="text" id="goals" name="goals" value={goals}
                       onChange={(e) => setGoals(e.target.value)}/>
                <br/>
                <label>Myths:</label>
                <input type="text" id="myths" name="myths" value={myths}
                       onChange={(e) => setMyths(e.target.value)}/>
                <br/>
                <label>Church Structure:</label>
                <input type="text" id="history" name="history" value={history}
                       onChange={(e) => setChurchStructure(e.target.value)}/>
                <br/>
                <label>Divine Relationships:</label>
                <input type="text" id="divinerelationship" name="divinerelationship" value={divineRelationship}
                       onChange={(e) => setDivineRelationship(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>


        </div>)
    }



