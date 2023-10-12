import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/NavBar";
import {CardBackground} from "./Pages/Background/CharacterCard/CardBackground";
import {Maps} from "./Pages/Maps/MainMapPage/Maps";
import {MainPost} from "./Pages/PostPage/MainPostPage/MainPost";
import {GodCardBackground} from "./Pages/Background/GodCards/GodCardBackground";
import DetailCharacter from "./Components/Cards/DetailCards/DetailCharacter/DetailCharacter";
import DataRepo from "./Pages/DataRepo/DataRepo";
import SpeciesCard from "./Components/Cards/SpeciesCard/SpeciesCard";
import Login from "./Pages/Login/Login";
import CampaignPage from "./Pages/Campaign/Campaigns/CampaignPage";
import SpeciesBackground from "./Pages/Background/SpeciesCArd/SpeciesBackground";




function App() {


        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="character" element={<CardBackground />} />
                        <Route path="characters/playercharacters/:id" element={<DetailCharacter/>}/>
                        <Route path="gods" element={<GodCardBackground />} />
                        <Route path="maps" element={<Maps />} />
                        <Route path="add" element={<MainPost />} />
                        <Route path="repo" element={<DataRepo />} />
                        <Route path="species" element={<SpeciesCard />} />
                        <Route path="species/speciesid/:id" element={<SpeciesBackground/>}/>
                        <Route path="login" element={<Login />} />
                        <Route path="campaign" element={<CampaignPage />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        );

    }
export default App;
