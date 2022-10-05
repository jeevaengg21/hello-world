/**
 * Objective of the component is to organize all the hello world app component
 */
import { useEffect, useState } from "react"
import Welcome from "./Welcome"
import Weather from "./Weather"
import Population from "./Population"

/** Function component */
const App = () => {
    const initialPopulation = 7500;
    /** APP component will determine the birth rate only once */
    const [averageBirthRate, setAverageBirthRate] = useState(0);

    useEffect(() => {
        console.log("App is ready")
        /** Assume birth rate is read from DB and set here */
        setAverageBirthRate(10)
    }, [])



    const onBirthRateTextBoxChange = (event) => {
        setAverageBirthRate(event.target.value)
    }


    return (
        <>
            <label>World Birth Rate</label>
            <input type={"text"} value={averageBirthRate} onChange={onBirthRateTextBoxChange}></input>
            <Welcome></Welcome>
            <Weather></Weather>
            <Population initCount={initialPopulation} birthRate={averageBirthRate} ></Population>

        </>
    )
}

export default App;