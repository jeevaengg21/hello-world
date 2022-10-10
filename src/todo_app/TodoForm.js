import { useState } from "react";

const TodoForm = ({ onAdd }) => {
    const [todo, setTodo] = useState("")

    const onTodoTextChange = (event) => {
        setTodo(event.target.value)
    }

    const onClickAdd = () => {
        onAdd(todo);
        setTodo("")
    }

    return (<div>
        <input type={"text"} value={todo} onChange={onTodoTextChange}></input>
        <button onClick={onClickAdd}>Add</button>
    </div>)
}

export default TodoForm;