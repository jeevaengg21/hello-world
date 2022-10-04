/**
 * To measure the current weather state and display in hello world app
 */
import React, { useState, useEffect } from "react"
import RainUpdates from "./RainUpdates"

const Weather = () => {
    const title = "Weather updates"
    const [currentTemp, setCurrentTemp] = useState(24)
    const [myData, updateMyData] = useState("")


    const measureTemparature = () => {
        setInterval(() => {
            console.log("Measure current temp")
            setCurrentTemp(currentTemp + 1)
            updateMyData("Last updated on " + new Date().toLocaleString())
        }, 5000)
    }

    /**
     * useEffect(function, Array of dependencies)
     * useEffect with empty dependency can be considered like PostConstruct
     */
    useEffect(() => {
        console.log("UseEffect loaded")
        measureTemparature();
    }, []);


    return (
        <div>
            <h3>{title}</h3>
            <ul>
                <li>Current temp {currentTemp} degree</li>
                <li>Min temp 24 degree</li>
                <li>Max temp 35 degree</li>
                <RainUpdates></RainUpdates>
            </ul>
            <p>{myData}</p>
        </div>)
}

export default Weather