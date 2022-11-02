import Button from "../Button";

const TodoItem = ({ itemName, id, onDone, onRemove }) => {
    const onClickDone = () => {
        onDone(id)
    }
    const onClickRemove = () => {
        onRemove(id)
    }


    return (
        <div>
            <label>{itemName}</label>
            <Button onClick={onClickDone} label="Done" />
            <Button onClick={onClickRemove} label="Remove" />
        </div>
    )
}

export default TodoItem;