import "./Home.css"

export default function Home() {

    return (
        <div className="Home">
            <div className="Title">
                <h1 className="Title">Welcome to the Avorlion Wiki!</h1>
            </div>
            <div className="Body">
                <p>Ill add more to this as time progresses!</p>
                <img src={require('src/Images/Maps/Keolon.png')} alt="This is meant to load but that a problem for another day"/>
            </div>

        </div>
    )
}