import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"
import TextField from "./TextField"

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
        <div className="card p-3 mt-4 bg-secondary text-white bg-opacity-50" style={{ width: "18rem" }}>

            <div className="card-body">
                < h3 className="card-title"> Login Page</h3 >
                <TextField label={"Username"} value={username} onChange={(e) => { setUsername(e.target.value) }}></TextField>
                <TextField label={"Password"} type={"password"} value={password} onChange={(e) => { setPassword(e.target.value) }}></TextField>
                <Button label={"Login"} onClick={onLogin}></Button>
            </div>
        </div >
    )
}

export default Login