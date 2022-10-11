const TodoItem = ({ itemName, itemIndex, onDone }) => {
    const onClickDone = () => {
        onDone(itemIndex)
    }
    return (
        <div>
            <label>{itemName}</label>
            <button onClick={onClickDone} >Done</button>
        </div>
    )
}

export default TodoItem;