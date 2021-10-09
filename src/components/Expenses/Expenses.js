import React, { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter(expense => new Date(expense.date).getFullYear().toString() === filteredYear)
  let expenseItems = <p className="message">No Expenses Found</p>

  if (filteredExpenses.length > 0) {
    expenseItems = filteredExpenses.map(expense =>
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        style={props.style}
        delete={props.deleteItem}
      />

    )
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}

      />
      <ExpensesChart expenses={filteredExpenses} />

      {expenseItems}


    </Card>
  );
}

export default Expenses;
