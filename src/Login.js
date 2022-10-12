import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const onLogin = () => {
        if (username === 'admin' && password === 'admin') {
            console.log("Allow login")
            /** helps to navigate to a page programatically */
            onLoginSuccess()
            navigate("/")
        } else {
            console.log('block login')
        }
    }

    return (
        <>
            <h3>Login Page</h3>
            <div>
                <label>Username</label>
                <input type={"text"} value={username} onChange={(e) => { setUsername(e.target.value) }}></input>
            </div>
            <div>
                <label>Password</label>
                <input type={"text"} value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
            </div>
            <button onClick={onLogin}>Login</button>
        </>
    )
}

export default Login