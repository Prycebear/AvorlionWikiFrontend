import React, {useEffect, useState} from "react";
import "./GodPost.css"


export const GodPost = () => {

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/character/add", {
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
                setFirstName("");
                setSurname("");
                setNickname("");
                setRace("");
                setRole("");
                setShortDescription("");
                setDescription("");
                setHistory("");
                setImage("");
                setCharacterType("");
            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // <br/>
    // <label>Nickname:</label>
    // <input type="text" id="nickname" name="nickname" value={nickname}
    //        onChange={(e) => setNickname(e.target.value)}/>
    // <br/>


    return (
        <div className="CharacterPost">
            <form method="POST" action="http://localhost:8080/character/add">
                <label>Name:</label>
                <input type="text" id="name" name="name"/>
                <br/>
                <label>Domain:</label>
                <input type="text" id="domain" name="domain"/>
                <br/>
                <label>Type:</label>
                <input type="text" id="type" name="type"/>
                <br/>
                <label>Short Description:</label>
                <input type = "text" id = "shortdescription" name = "shortdescription"/>
                <label>Description:</label>
                <input type="text" id="description" name="description"/>
                <br/>
                <label>Role:</label>
                <input type="text" id="role" name="role"/>
                <br/>
                <label>History:</label>
                <input type="text" id="history" name="history"/>
                <br/>

                <button type="submit">Submit</button>
            </form>


        </div>)
    }



