import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

const Todo = () => {
    /** Data store, DB */
    const [todoItems, setTodoItems] = useState([])

    const onAddTodo = (todo) => {
        setTodoItems(prevItems => {
            const updatedItems = [...prevItems, todo]
            console.log(updatedItems)
            return updatedItems;
        })
    }

    const onDone = (itemIndex) => {
        console.log("Please remove the index", itemIndex)

        const currentItems = [...todoItems];
        currentItems.splice(itemIndex, 1);
        console.log(currentItems)
        setTodoItems([...currentItems]);
    }

    return (<>
        <TodoForm onAdd={onAddTodo}></TodoForm>
        <div>
            {todoItems.map((itemText, itemIndex) => {
                return <TodoItem key={itemIndex} itemName={itemText} itemIndex={itemIndex} onDone={onDone}></TodoItem>
            })}
        </div>
    </>)

}

export default Todo