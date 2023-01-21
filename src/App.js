import logo from './logo.svg';
import './App.css';

import Navbar from "./Navbar/Navbar";
import CharacterCard from "./Cards/Character/CharacterCard";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>

            </header>
            <body className="App-header">

            <CharacterCard/>

            <img src={logo} className="App-logo" alt="logo"/>
            </body>
        </div>
    );
}

export default App;
