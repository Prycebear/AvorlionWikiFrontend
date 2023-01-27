import "./Navbar.css"

export default function Navbar() {
    return (
        <div className = "nav">
            <h1 id = "Title">Avorlion</h1>
            <ul className="NavElement">
                <li><a  href="src/Components/NavBar/Navbar">Maps</a></li>
                <li><a href="src/Components/NavBar/Navbar" >Characters</a></li>
                <li><a href="src/Components/NavBar/Navbar">Locations</a></li>
                <li><a href="src/Components/NavBar/Navbar">History</a></li>
            </ul>
        </div>
    );
}

