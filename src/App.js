import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import CharacterCard from "./Components/CharacterCards/CharacterCard";
import {useEffect, useState} from "react";


function App() {



        return (
            <div className="App">
                <header className="App-header">
                    <Navbar/>

                </header>
                <body>
                    {groups.map(group =>
                        <div key={group.id}>
                            <CharacterCard groups={group}/>
                        </div>
                    )}
                </body>
            </div>
        );
    }
export default App;
