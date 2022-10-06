import { useEffect, useState } from "react"

/**Function component */
const Population = (props) => {
    let total = 0;

    const [counter, setCounter] = useState(0);
    const [br, setBr] = useState(0)

    let { initCount, birthRate, onBirth } = props;
    console.log("init props extraction", props)

    useEffect(() => {
        console.log("Population component on ready", props)
        setCounter(initCount)
    }, [initCount])

    useEffect(() => {
        setBr(birthRate)
    }, [birthRate])

    const calculateOxygenRequirement = (_headcount) => {
        console.log("Oxygen tank ", _headcount * 4)
    }

    const registerBirth = () => {
        /** code style - 1 */
        // updateCounter(counter + 1)
        // total = total + 1
        // calculateOxygenRequirement(counter)
        // console.log("current counter value ::" + counter)
        // console.log("total :: " + total)

        setCounter(currentStateValue => {
            const newHeadCount = currentStateValue + 1
            calculateOxygenRequirement(newHeadCount)
            onBirth(new Date())
            return newHeadCount
        })

    }

    function registerDeath() {
        /** code style - 2
         * ** Good practice
         */
        setCounter(currentStateValue => currentStateValue - 1)

    }

    return (<>
        <h3>Population</h3>
        <p>Birth rate: {br}</p>
        <div>
            <label>Total : {counter}</label>
            <button onClick={registerBirth} >Register birth</button>
            <button onClick={registerDeath}>Register death</button>
        </div>

    </>)
}

export default Population