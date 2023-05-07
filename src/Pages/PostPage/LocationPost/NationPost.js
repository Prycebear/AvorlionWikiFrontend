import React, {useEffect, useState} from "react";
import useFetch from "../../../Hooks/UseFetch";



export const NationPost = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [history, setHistory] = useState("");
    const [leader, setLeader] = useState("");
    const [continent, setContinent] = useState("");

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
                    continent: continent,
                }),
            });
            //let resJson = await res;
            if (res.status === 200) {
                setName("");
                setDescription("");
                setImage("");
                setHistory("");
                setContinent("");
                setLeader("");
            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
            return alert("Nah, no beuno on the posterino")
        }
        return alert("New character succesfully added broski!")
    };

    const [data] = useFetch("https://avorlionbackend.herokuapp.com/continent/all")


    return (
        <div className="NationPost">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" id="name" name="name" value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <br/>
                <label>Description:</label>
                <br/>
                <textarea type="text" id="description" name="description" value={description}
                          onChange={(e) => setDescription(e.target.value)}/>
                <br/>
                <select>{
                    this.state.values.map((data) => {
                        return <option value={data.id}>{data.name}</option>
                    })
                }</select>
                <label>Image link:</label>
                <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </div>)


}



