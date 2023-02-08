import React, {useEffect, useState} from "react";
import "./CharacterPost.css"




export const CharacterPost = () => {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [nickname, setNickname] = useState("");
    const [race, setRace] = useState("");
    const [role, setRole] = useState("");
    const [description, setDescription] = useState("");
    const [history, setHistory] = useState("");
    const [image, setImage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/character/add", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: firstName,
                    surname: surname,
                    nickname: nickname,
                    race: race,
                    role: role,
                    description: description,
                    history: history,
                    image: image,
                }),
            });
            //let resJson = await res;
            if (res.status === 200) {
                setFirstName("");
                setSurname("");
                setNickname("");
                setRace("");
                setRole("");
                setDescription("");
                setHistory("");
                setImage("");
            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="CharacterPost">
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <br/>
                <label>Surname:</label>
                <input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                <br/>
                <label>Nickname:</label>
                <input type="text" id="nickname" name="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                <br/>
                <label>Race:</label>
                <br/>
                <select value={race} onChange={(e) => setRace(e.target.value)}>
                    <option value="Human">Human</option>
                    <option value="Elf">Elf</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Half-Elf">Half-Elf</option>
                    <option value="Gnome">Gnome</option>
                    <option value="Halfling">Halfling</option>
                    <option value="Deep-Gnome">Deep-Gnome</option>
                    <option value="Orc">Orc</option>
                    <option value="Half-Orc">Half-Orc</option>
                    <option value="Drow">Drow</option>
                    <option value="Dragon">Dragon</option>
                    <option value="Triton">Triton</option>
                    <option value="Changeling">Changeling</option>


                </select>
                <label>Class:</label>
                <br/>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    //todo: Generate from backend.
                    <option value="Warrior">Warrior</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Ranger">Ranger</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Cleric">Cleric</option>
                    <option value="Wizard">Wizard</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Bard">Bard</option>
                    <option value="">None</option>
                </select>
                <label>Description:</label>
                <br/>
                <textarea type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <br/>
                <label>History:</label>
                <br/>
                <textarea type="text" id="history" name="history" value={history} onChange={(e) => setHistory(e.target.value)}/>
                <br/>
                <label>Image link:</label>
                <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </div>)
    }



