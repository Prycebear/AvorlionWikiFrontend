import React, {useEffect, useState} from "react";
import "./GodPost.css"


export const GodPost = () => {


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
                <label>Description:</label>
                <input type="text" id="description" name="description"/>
                <br/>
                <label>Piety:</label>
                <input type="text" id="piety" name="piety"/>
                <br/>
                <label>History:</label>
                <input type="text" id="history" name="history"/>
                <br/>

                <button type="submit">Submit</button>
            </form>


        </div>)
    }



