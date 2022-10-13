/**
 * Objective of the component is to organize all the hello world app component
 */
import { useEffect, useState } from "react"
import Welcome from "./Welcome"
import Weather from "./Weather"
import Population from "./Population"
import MyAccount from "./bank_app/MyAccount"
import Todo from "./todo_app/Todo"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import Login from "./Login"
import Sample from "./class_component/Sample"

/** Function component */
const App = () => {
    const [initialPopulation, setInitialPopulation] = useState(0);
    /** APP component will determine the birth rate only once */
    const [averageBirthRate, setAverageBirthRate] = useState(0);
    const [isLoggedIn, setLoggedIn] = useState(false)

    const onLoginSuccess = () => {
        console.log("Login successfull")
        setLoggedIn(true)
    }

    useEffect(() => {
        console.log("App is ready")
        /** Assume birth rate is read from DB and set here */
        setInitialPopulation(7000)
        setAverageBirthRate(10)
    }, [])


    const onBirthRateTextBoxChange = (event) => {
        setAverageBirthRate(event.target.value)
    }

    const issueBirthCertificate = (birthDateTime) => {
        console.log("Intiate birth certification creation process", birthDateTime)
    }

    const CheckLoggedIn = ({ children }) => {
        return isLoggedIn ? (children) : <Navigate to="/login"></Navigate>
    }


    return (
        <BrowserRouter>

            <Routes>
                <Route path="/login" element={<Login onLoginSuccess={onLoginSuccess} ></Login>}></Route>
                <Route path="/" element={
                    <CheckLoggedIn>
                        <Welcome />
                    </CheckLoggedIn>
                }></Route>
                <Route path="/weather/report" element={<Weather></Weather>}></Route>
                <Route path="/bank" element={
                    <CheckLoggedIn>
                        <MyAccount></MyAccount>
                        <Todo></Todo>
                    </CheckLoggedIn>}></Route>
                <Route path="/todo/list" element={<Todo></Todo>}></Route>
                <Route path="/population" element={<Population></Population>}></Route>
                <Route path="/sample" element={<Sample></Sample>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;