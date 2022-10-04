/**
 * Objective of the component is to organize all the hello world app component
 */
import Welcome from "./Welcome"
import Weather from "./Weather"
import Population from "./Population"

const App = () => {
    return (
        <>
            <Welcome></Welcome>
            <Weather></Weather>
            <Population></Population>
        </>
    )
}

export default App;