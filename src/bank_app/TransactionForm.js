import { useState } from "react"

/**
 * To perform deposit or withdraw action
 */
const TransactionForm = ({ onDeposit, onWithdraw }) => {

    const [amount, setAmount] = useState(0)

    const onAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const onClickDeposit = () => {
        onDeposit(amount)
        setAmount(0)
    }

    return (<>
        <div>
            <label>Amount</label>
            <input type={"number"} value={amount} onChange={onAmountChange} ></input>
            <button onClick={onClickDeposit}>Deposit</button>
            <button onClick={() => {
                onWithdraw(amount)
                setAmount(0)
            }}>Withdraw</button>
        </div>
    </>)
}

export default TransactionForm