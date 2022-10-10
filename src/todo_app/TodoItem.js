const TodoItem = ({ itemName, itemIndex, onDone }) => {
    const onClickDone = () => {
        onDone(itemIndex)
    }
    return (
        <li>
            <label>{itemName}</label>
            <button onClick={onClickDone} >Done</button>
        </li>
    )
}

export default TodoItem;