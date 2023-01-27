import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import CharacterCard from "./Components/CharacterCards/CharacterCard";
import Home from "./Pages/Home/Home";


function App() {



        return (
            <div className="App">
                <header className="App-header">
                    <Navbar/>
                </header>
                <footer/>
            </div>
        );
    }
export default App;
