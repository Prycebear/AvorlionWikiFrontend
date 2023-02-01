import "./NavBar.css"
import {Link, Outlet} from "react-router-dom";

export default function Navbar() {
    return (

    <>
        <nav>
            <div className = "nav">
                <div id = "Title-Background">
                    <h1 id = "Title">Avorlion</h1>
                </div>
                <ul className="NavElement">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/character">Character</Link></li>
                    <li><Link to="/maps">Maps</Link></li>
                    <li><Link to="/character/1">Character</Link></li>
                </ul>
            </div>
        </nav>

        <Outlet />
    </>
    );
}

