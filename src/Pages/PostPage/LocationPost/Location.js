import React, {useEffect, useState} from "react";
import useFetch from "../../../Hooks/UseFetch";



export const LocationPost = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [history, setHistory] = useState("");
    const [leader, setLeader] = useState("");
    const [subNation, setSubNation] = useState("");
    const [type, setType] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch("https://avorlionbackend.herokuapp.com/nation/add", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    image: image,
                    history: history,
                    leader: leader,
                    subNation: subNation,
                    type: type,
                }),
            });
            //let resJson = await res;
            if (res.status === 200) {
                setName("");
                setDescription("");
                setImage("");
                setHistory("");
                setSubNation("");
                setLeader("");
                setType("");
            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
            return alert("Nah, no beuno on the posterino")
        }
        return alert("New character succesfully added broski!")
    };

    const [data] = useFetch("https://avorlionbackend.herokuapp.com/lcation/all")


    return (
        <div className="LocationPost">
            <form onSubmit={handleSubmit}>
                <h1>Location posting</h1>
                <label>Name:</label>
                <input type="text" id="name" name="name" value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <br/>
                <label>Description:</label>
                <br/>
                <textarea type="text" id="description" name="description" value={description}
                          onChange={(e) => setDescription(e.target.value)}/>
                <br/>
                <select type="text" id="subNation" name="subNation" value={subNation}
                        onChange={(e) => setSubNation(e.target.value)}>
                    {data &&
                        data.map((item) => {
                            return <option value = {item.id}>{item.name}</option>
                        })}
                    <option value="none">None</option>
                </select>
                <label>Image link:</label>
                <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>

                <select type="text" id="type" name="type" value={type}
                        onChange={(e) => setType(e.target.value)}>
                    <option value="Capital">None</option>
                    <option value="City">None</option>
                    <option value="Town">None</option>
                    <option value="Village">None</option>
                    <option value="Fort">None</option>
                    <option value="Forest">None</option>
                    <option value="Woods">None</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>)


}



