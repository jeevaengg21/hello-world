/**
 * Objective of the component is to organize all the hello world app component
 */
import { useEffect, useState } from "react"
import Welcome from "./Welcome"
import Weather from "./Weather"
import Population from "./Population"
import MyAccount from "./bank_app/MyAccount"
import Todo from "./todo_app/Todo"

/** Function component */
const App = () => {
    const [initialPopulation, setInitialPopulation] = useState(0);
    /** APP component will determine the birth rate only once */
    const [averageBirthRate, setAverageBirthRate] = useState(0);

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


    return (
        <>
            {/* <label>World Birth Rate</label>
            <input type={"text"} value={averageBirthRate} onChange={onBirthRateTextBoxChange}></input>
            <Welcome></Welcome>
            <Weather></Weather>
            <Population initCount={initialPopulation} birthRate={averageBirthRate} onBirth={issueBirthCertificate} ></Population>
            <MyAccount></MyAccount> */}
            <Todo></Todo>
        </>
    )
}

export default App;