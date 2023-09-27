// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionListItems, deleteHistory} = props
  const {title, type, amount} = transactionListItems
  const onDeleteClick = () => {
    deleteHistory(transactionListItems)
  }
  return (
    <li className="history-items">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button
        type="button"
        className="delete-icon-btn"
        onClick={onDeleteClick}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
