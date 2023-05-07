import React, {useEffect, useState} from "react";
import "./MainPost.css"
import CharacterCard from "../../../Components/Cards/CharacterCards/CharacterCard";
import {Maps} from "../../Maps/Maps";
import {CharacterPost} from "../CharacterPost/CharacterPost";
import {GodPost} from "../GodPost/GodPost";
import {ContinentPost} from "../LocationPost/ContinentPost";
import {NationPost} from "../LocationPost/NationPost";


export const MainPost = () => {
    const [post, setPost] = useState('character')

    return (
        <div className="MainPost">
            <div className="FirstElement">
            <h2>What would you like to Add?</h2>
            <div className="PostButtons">
                <button onClick={() => setPost('character')}>Character</button>
                <button onClick={() => setPost('god')}>God</button>
                <button onClick={() => setPost('continent')}>Continent</button>
                <button onClick={() => setPost('nation')}>Nation</button>
                <button onClick={() => setPost('city')}>City</button>
                <button onClick={() => setPost('history')}>History</button>
            </div>
            <div className="PostForm">
                {post === 'character' && (
                    <CharacterPost />
                )}

                {post === 'god' && (
                    <GodPost/>
                )}

                {post === 'continent' && (
                    <ContinentPost/>
                )}

                {post === 'nation' && (
                    <NationPost/>
                )}

            </div>
            </div>
        </div>

    )
}



