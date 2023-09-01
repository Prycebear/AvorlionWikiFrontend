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
                    <li><Link id = 'NavElement' to="/">Home</Link></li>
                    <li><Link id = 'NavElement' to="/repo">Wiki</Link></li>
                    <li><Link id = 'NavElement' to="/add">Add</Link></li>
                    <li><Link id = 'NavElement' to="/login">login</Link></li>

                </ul>
            </div>
        </nav>

        <Outlet />
    </>
    );
}

