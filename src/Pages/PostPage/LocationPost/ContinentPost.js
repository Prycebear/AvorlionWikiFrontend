import React, {useEffect, useState} from "react";



export const ContinentPost = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch("https://avorlionbackend.herokuapp.com/continent/add", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    image: image,
                }),
            });
            //let resJson = await res;
            if (res.status === 200) {
                setName("");
                setDescription("");
                setImage("");
            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
            return alert("Nah, no beuno on the posterino")
        }
        return alert("New character succesfully added broski!")
    };


    return (
        <div className="ContinentPost">
            <form onSubmit={handleSubmit}>
                <h1>Continent posting</h1>
                <label>Name:</label>
                <input type="text" id="name" name="name" value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <br/>
                <label>Description:</label>
                <br/>
                <textarea type="text" id="description" name="description" value={description}
                          onChange={(e) => setDescription(e.target.value)}/>
                <br/>
                <label>Image link:</label>
                <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </div>)


}



