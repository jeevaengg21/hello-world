/**
 * To display the tranaction entry containing transaction type, date time, amount 
 */
const MiniStatementEntry = ({ date, txn_type, txn_amount }) => {

    return (<>
        <div>
            <label>{date}</label>
            <label style={{ marginLeft: "3px" }} >{txn_type}</label>
            <label style={{ marginLeft: "3px" }} >Rs.{txn_amount}</label>
        </div>
    </>)
}

export default MiniStatementEntry;