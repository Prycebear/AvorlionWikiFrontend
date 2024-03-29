import React, {useEffect, useState} from "react";
import "./MainPost.css"
import CharacterCard from "../../../Components/Cards/CharacterCards/CharacterCard";
import {Maps} from "../../Maps/MainMapPage/Maps";
import {CharacterPost} from "../CharacterPost/CharacterPost";
import {GodPost} from "../GodPost/GodPost";
import {ContinentPost} from "../LocationPost/ContinentPost";
import {NationPost} from "../LocationPost/NationPost";
import {SubNationPost} from "../LocationPost/SubNationPost";
import {LocationPost} from "../LocationPost/Location";
import {Signup} from "../../Login/Signup";


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
                <button onClick={() => setPost('subnation')}>SubNation</button>
                <button onClick={() => setPost('location')}>Location</button>
                <button onClick={() => setPost('signup')}>Signup</button>
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

                {post === 'subnation' && (
                    <SubNationPost/>
                )}

                {post === 'location' && (
                    <LocationPost/>
                )}

                {post === 'signup' && (
                    <Signup/>
                )}

            </div>
            </div>
        </div>

    )
}



