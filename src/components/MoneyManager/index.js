import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    balance: 0,
    income: 0,
    expenses: 0,
    transactionList: [],
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onAmountTypeChange = event => {
    const typeAmount = event.target.value

    this.setState({type: typeAmount})
  }

  addMoneyTransactionItem = () => {
    const {amount, type, income, expenses, balance, title} = this.state
    const amountValue = parseInt(amount)

    let newIncome = income
    let newExpenses = expenses
    let newBalance = balance
    let newType = type

    if (type === 'Income') {
      newIncome += amountValue
      newType = 'Income'
    } else if (type === 'Expenses') {
      newExpenses += amountValue
      newType = 'Expenses'
    } else {
      newType = 'Income'
      newIncome += amountValue
    }

    newBalance = newIncome - newExpenses

    const newList = {
      id: uuidv4(),
      title,
      amount: amountValue,
      type: newType,
      income: newIncome,
      expenses: newExpenses,
      balance: newBalance,
    }

    this.setState(prevState => ({
      income: newIncome,
      expenses: newExpenses,
      balance: newBalance,
      transactionList: [...prevState.transactionList, newList],
      title: '',
      amount: '',
      type: '',
    }))
  }

  historyDelete = transactionListItems => {
    const {income, expenses, balance, transactionList} = this.state
    const {type, amount, id} = transactionListItems
    const newTransactionList = transactionList.filter(each => each.id !== id)

    const amountVal = parseInt(amount)

    let newIncome = income
    let newExpenses = expenses
    let newBalance = balance

    if (type === 'Income') {
      newIncome -= amountVal
    } else if (type === 'Expenses') {
      newExpenses -= amountVal
    }
    newBalance = newIncome - newExpenses

    this.setState({
      income: newIncome,
      balance: newBalance,
      expenses: newExpenses,
      transactionList: newTransactionList,
    })
  }

  render() {
    const {
      title,
      amount,
      income,
      balance,
      expenses,
      type,
      transactionList,
    } = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="account-holder-container">
            <h1 className="account-holder-name">Hi, Richard</h1>
            <p className="account-description">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails income={income} balance={balance} expenses={expenses} />
          <div className="bottom-card-input-container">
            <div className="input-container">
              <h1>Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                className="title-input"
                id="title"
                placeholder="TITLE"
                value={title}
                onChange={this.onTitleChange}
              />
              <label htmlFor="title">AMOUNT</label>
              <input
                className="title-input"
                id="title"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.onAmountChange}
              />
              <label htmlFor="amountType">TYPE</label>
              <select
                id="amountType"
                onChange={this.onAmountTypeChange}
                value={type}
              >
                {transactionTypeOptions.map(option => (
                  <option key={option.optionId} value={option.displayText}>
                    {option.displayText}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="button"
                onClick={this.addMoneyTransactionItem}
                data-testid="delete"
              >
                Add
              </button>
            </div>
            <div className="output-container">
              <h1>History</h1>
              <div className="history-headers">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
              <ul className="history-container">
                {transactionList.map(each => (
                  <TransactionItem
                    key={each.id}
                    transactionListItems={each}
                    deleteHistory={this.historyDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
