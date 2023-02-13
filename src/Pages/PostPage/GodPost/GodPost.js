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

    let handleGodSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/gods/add", {
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
            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
        }
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
                <input type="text" id="type" name="type" value={type}
                       onChange={(e) => setType(e.target.value)}/>
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

                <button type="submit">Submit</button>
            </form>


        </div>)
    }



