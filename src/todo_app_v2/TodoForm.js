import { useState } from "react";

const TodoForm = ({ onAdd }) => {
    const [todo, setTodo] = useState("")

    const onTodoTextChange = (event) => {
        setTodo(event.target.value)
    }

    const onClickAdd = () => {
        const body = JSON.stringify({
            name: todo
        })
        // post call to save the todo
        fetch("/todo",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: body
            },)
            .then(res => res.json())
            .then(resjson => {
                console.log(resjson)
                onAdd(resjson)
            })

        setTodo()
    }

    return (<div>
        <input type={"text"} value={todo} onChange={onTodoTextChange}></input>
        <button onClick={onClickAdd}>Add</button>
    </div>)
}

export default TodoForm;