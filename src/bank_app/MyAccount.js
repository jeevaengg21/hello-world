import { useState } from "react"
import ClosingBalance from "./ClosingBalance"
import MiniStatementEntry from "./MiniStatementEntry";
import TransactionForm from "./TransactionForm"


const MyAccount = () => {
    const [balance, setBalance] = useState(0);
    const [txnHistory, setTxnHistory] = useState([]);

    const deposit = (amount) => {
        setBalance(prevBalance => parseFloat(prevBalance) + parseFloat(amount))
        registerTransaction(amount)
    }

    const withdraw = (amount) => {
        if (amount < balance) {
            setBalance(prevBalance => { return parseFloat(prevBalance) - parseFloat(amount) })
            registerTransaction(amount, "Dr")
        } else {
            alert("Withdraw rejected due to insufficient balance")
        }
    }

    const registerTransaction = (amount, type = "Cr") => {
        const newTxn = {
            date: new Date().toLocaleString(),
            txn_type: type,
            txn_amount: amount
        }

        setTxnHistory(prevHistory => {
            const newHistory = [newTxn, ...prevHistory]
            return newHistory
        })
    }

    const buildMiniStatement = () => {
        return txnHistory.map(txn => <MiniStatementEntry date={txn.date} txn_type={txn.txn_type} txn_amount={txn.txn_amount}></MiniStatementEntry>)
    }

    return (
        <>
            <h3 style={{ margin: "10px" }}>My Account</h3>
            <ClosingBalance balance={balance}></ClosingBalance>
            <TransactionForm onDeposit={deposit} onWithdraw={withdraw}></TransactionForm>
            <h4 style={{ margin: "10px" }}>Mini Statement</h4>
            {
                buildMiniStatement()
            }
        </>
    )
}

export default MyAccount
