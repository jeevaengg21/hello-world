/**
 * To display the closing balance
 * To alert the when balance is less than 5000
 */
const ClosingBalance = ({ balance }) => {

    const isMinimumBalance = () => {
        return balance < 5000
    }

    return (<>
        <div>
            <label>Balance: Rs.{balance}</label>
        </div>
        {isMinimumBalance() ? <label>Alert!! Low balance, always maintain minimum balance to avoid additional charges</label> : <></>}
    </>)
}

export default ClosingBalance;