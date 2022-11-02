import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="/weather/report" >Weather</Link>
            </li>
            <li>
                <Link to="/praba" >My home</Link>
            </li>
            <li>
                <Link to="/bank">Bank</Link>
            </li>
            <li>
                <Link to="/todo/list">Todo</Link>
            </li>
            <li>
                <Link to="/todo/list/v2">Todo V2</Link>
            </li>
            <li>
                <Link to="/population">Population</Link>
            </li>
            <li>
                <Link to="/sample">Sample class</Link>
            </li>
        </ul>
    )
}

export default Navigation;