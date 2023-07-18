import React, {useEffect, useState} from "react";



export const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch("https://avorlionbackend.herokuapp.com/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                    role: role,
                }),
            });
            //let resJson = await res;
            if (res.status === 200) {
                setEmail("");
                setUsername("");
                setPassword("");
                setRole("");
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
        <div className="CharacterPost">
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" id="firstName" name="firstName" value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <label>Username:</label>
                <input type="text" id="surname" name="surname" value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <label>Password:</label>
                <input type="text" id="nickname" name="nickname" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <br/>


                <button type="submit">Submit</button>
            </form>
        </div>)


}



