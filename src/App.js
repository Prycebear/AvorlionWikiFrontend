import logo from './logo.svg';
import './App.css';

import Navbar from "./Navbar/Navbar";
import CharacterCard from "./Cards/Character/CharacterCard";
import CharacterList from "./Pages/CharacterList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>

            </header>
            <body>

            <CharacterList></CharacterList>
            <CharacterList></CharacterList>


            </body>
        </div>
    );
}

export default App;
