import React, { useState, useEffect } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// This code is related to local storage, here we are getting
//Expenses from local storage


const App = () => {

  //array  for button styles
  const styles = {
    danger_btn: {
      backgroundColor: '#fff',
      color: 'red',
      borderColor: 'red'
    },
    remove_btn: {
      backgroundColor: '#2A2A2A',
      color: '#fff',
      borderColor: 'grey',
      padding: '2px  4px  ',
      margin: 0,
      borderRadius: '50%',
      fontSize: '10px',
      height: '15px',
      width: '15px',
      boxShadow: '0 2px 1rem 0 rgba(0,0,0,0.5)'
    }
  }
  //set up and fetch data from local storage
  let savedItem = JSON.parse(localStorage.getItem('expenses'))
  const [expenses, setExpenses] = useState(savedItem || []);

  //remove expense from an array

  const removeItem = (id) => {
    setExpenses(prev => {
      return prev.filter(item => item.id !== id)
    })
  }



  const addExpenseHandler = (expense) => {
    setExpenses(prev => {
      // return a whole new array with prev array items
      return [expense, ...prev]
    })
  }
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  return (
    <div>
      <NewExpense style={styles} onAddExpense={addExpenseHandler} />
      {
        expenses.length === 0 ? ('') : (<Expenses deleteItem={removeItem} items={expenses} style={styles} />)
      }
    </div>
  );
}

export default App;
