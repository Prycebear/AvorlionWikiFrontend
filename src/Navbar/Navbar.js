import DropDown from "./DropDown/DropDown";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className = "nav">
            <h1>Avorlion</h1>
            <ul className="NavElement">
                <li><a  href="">Maps</a></li>
                <li><a href="" >Characters</a></li>
                <li><a href="">Locations</a></li>
                <li><a href="">History</a></li>
            </ul>
        </div>
    );
}

