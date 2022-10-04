import { useState } from "react"

const Population = () => {
    let total = 0;
    const [counter, updateCounter] = useState(0);

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

        updateCounter(currentStateValue => {
            const newHeadCount = currentStateValue + 1
            calculateOxygenRequirement(newHeadCount)
            return newHeadCount
        })

    }

    function registerDeath() {
        /** code style - 2
         * ** Good practice
         */
        updateCounter(currentStateValue => currentStateValue - 1)

    }

    return (<>
        <h3>Population</h3>
        <div>
            <label>Total : {counter}</label>
            <button onClick={registerBirth} >Register birth</button>
            <button onClick={registerDeath}>Register death</button>
        </div>

    </>)
}

export default Population