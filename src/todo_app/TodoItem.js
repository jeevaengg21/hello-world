import Button from "../Button";

const TodoItem = ({ itemName, itemIndex, onDone }) => {
    const onClickDone = () => {
        onDone(itemIndex)
    }
    return (
        <div>
            <label>{itemName}</label>
            <Button onClick={onClickDone} label="Done" />
        </div>
    )
}

export default TodoItem;