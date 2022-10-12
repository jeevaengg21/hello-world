import React from "react";

class Sample extends React.Component {

    /** Mandatory */
    constructor() {
        /** Mandatory */
        super()
        console.log("inside constructor")
        this.state = {
            name: "",
            location: ""
        }
    }

    onClickMe = () => {
        console.log("i got clicked")
    }

    onNameChange = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value
        })
    }

    /** Like a PostConstruct */
    /** Life cycle method */
    componentDidMount() {
        console.log("inside componentDidMount")
        this.setState({
            ...this.state,
            name: "jeeva",
            location: "chennai"
        })
    }

    /** Life cycle method */
    shouldComponentUpdate(nextProps, nextState) {
        console.log("current name ", this.state.name)
        console.log("next state name", nextState.name)
        if (nextState.name === 'praba') {
            return false
        } else {
            return true;
        }
    }

    /** Life cycle method */
    componentDidUpdate(prevProps, prevState) {
        console.log("inside componentDidUpdate", prevState)
    }

    /** Mandatory */
    render() {
        /** Mandatory */
        return (<>
            <h1> Sample is a class component</h1>

            <label>Username</label>
            <input type="text" value={this.state.name} onChange={this.onNameChange}></input>

            <h3>{this.state.name}</h3>
            <h3>{this.state.location}</h3>
            <button onClick={this.onClickMe}> Click me</button>

        </>)
    }

}

export default Sample