import logo from './logo.svg';
import './App.css';

import Navbar from "./Components/NavBar/Navbar";

import CharacterList from "./Components/CharacterList/CharacterList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>

            </header>
            <body>

            <CharacterList></CharacterList>


            </body>
        </div>
    );
}

export default App;
