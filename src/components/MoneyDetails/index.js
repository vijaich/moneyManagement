// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, balance, expenses} = props

  return (
    <ul className="money-items-contaniner">
      <li className="money-details balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-icon"
        />
        <div className="amount-details-sec">
          <p className="each-details-header">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="money-details income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-icon"
        />
        <div className="amount-details-sec">
          <p className="each-details-header">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            {' '}
            Rs {income}
          </p>
        </div>
      </li>
      <li className="money-details expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-icon"
        />
        <div className="amount-details-sec">
          <p className="each-details-header">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
