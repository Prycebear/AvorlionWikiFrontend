import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import Body, {CharacterCardBody} from "./Components/Body/Body/CharacterCardBody";


function App() {



        return (
            <div className="App">
                <header className="App-header">
                    <Navbar/>

                </header>
                <CharacterCardBody/>
            </div>
        );
    }
export default App;
