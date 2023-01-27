import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import CharacterCard from "./Components/CharacterCards/CharacterCard";
import Home from "./Pages/Home/Home";
import Layout from "./Layout/Layout";


function App() {



        return (
            <BrowserRouter>
                    <Navbar/>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="character" element={<CharacterCard />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
export default App;
