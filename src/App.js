import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterCard from "./Components/CharacterCards/CharacterCard";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/NavBar";
import {CharacterPage} from "./Pages/Characters/CharacterPage";
import {Maps} from "./Pages/Maps/Maps";
import DetailCharacter from "./Components/DetailCards/DetailCharacter/DetailCharacter";


function CharacterPageS() {
    return null;
}

function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="character" element={<CharacterPage />} />
                        <Route path="maps" element={<Maps />} />
                        <Route path="character/1" element={<DetailCharacter />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
export default App;
