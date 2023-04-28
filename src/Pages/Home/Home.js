import "./Home.css"

import logo from "src/Pages/Home/Keolon.png"

export default function Home() {

    return (
        <div className="Home">
            <div className="Title">
                <h1 className="Title">Welcome to the Avorlion Wiki!</h1>
            </div>
            <div className="Body">
                <p>Welcome to the world of Avorlion, a land of magic, monsters, and adventure. It is currently the year 1106, over a millennium since the Great Cataclysm that reshaped the world. The Cataclysm was a devastating event that shook the very foundations of reality, unleashing chaotic magic and bringing about massive destruction.
                    In the aftermath, civilizations crumbled, new ones rose from the ashes, and the world was forever changed. Now, the people of Avorlion struggle to survive in a world where danger lurks around every corner and the forces of good and evil battle for supremacy.</p>
                <img src={logo} alt="This is meant to load but that a problem for another day"/>
            </div>

        </div>
    )
}