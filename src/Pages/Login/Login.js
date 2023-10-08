
import {useState} from "react";




function Login() {

    const [login, setLogin] = useState(false);

        return (
            <div>
                <h1>Sorry buddy, gotta login if you want to look at this nerd stuff :( Shame the front end doesnt work for this just yet :)</h1>
                <form>
                    <label>Username</label>
                    <input type="text" id="name"/>
                    <label>Password</label>
                    <input type="password" id="password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
}
export default Login;
