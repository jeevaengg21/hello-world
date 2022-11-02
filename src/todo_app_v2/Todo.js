import { useEffect, useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

const Todo = () => {
    /** Data store, DB */
    const [todoItems, setTodoItems] = useState([

    ])

    const onAddTodo = (todo) => {
        setTodoItems(prevItems => {
            const updatedItems = [...prevItems, todo]
            console.log(updatedItems)
            return updatedItems;
        })
    }

    const onDone = (id) => {
        console.log("Please remove the index", id)

        fetch(`/todo/done/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(res => console.log(res))

        const currentItems = [...todoItems];
        currentItems.splice(id, 1);
        console.log(currentItems)
        setTodoItems([...currentItems]);
    }

    const onRemove = (id) => {
        fetch(`/todo/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(resjson => console.log(resjson))
    }

    useEffect(() => {
        fetch("/todo") // 
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setTodoItems([...res])
            })
            .catch(err => console.log(err))
    }, [])

    return (<>
        <TodoForm onAdd={onAddTodo}></TodoForm>
        <div>
            {todoItems.map((todo) => {
                return <TodoItem key={todo.id} itemName={todo.name} id={todo.id} onDone={onDone} onRemove={onRemove}></TodoItem>
            })}
        </div>
    </>)

}

export default Todo