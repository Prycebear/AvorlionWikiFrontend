import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/NavBar";
import {CardBackground} from "./Pages/Background/CharacterCard/CardBackground";
import {Maps} from "./Pages/Maps/Maps";
import {MainPost} from "./Pages/PostPage/MainPostPage/MainPost";
import GodCard from "./Components/Cards/GodCards/GodCard";
import {GodCardBackground} from "./Pages/Background/GodCards/GodCardBackground";
import DetailCharacter from "./Components/Cards/DetailCards/DetailCharacter/DetailCharacter";



function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="character" element={<CardBackground />} />
                        <Route path="character/:id" element={<DetailCharacter/>}/>
                        <Route path="gods" element={<GodCardBackground />} />
                        <Route path="maps" element={<DetailCharacter />} />
                        <Route path="add" element={<MainPost />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
export default App;
