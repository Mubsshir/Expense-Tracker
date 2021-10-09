import React, { useState } from 'react'
import Button from '../UI/Button'
import './css/ExpenseForm.css'


const ExpenseForm = (props) => {

    //set initial state for all user inputs
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: new Date(2020, 7, 14)
    })


    const titleChangeHandler = (event) => {
        setUserInput((prev) => {
            return { ...prev, enteredTitle: event.target.value }
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput((prev) => {
            return { ...prev, enteredAmount: event.target.value }
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput((prev) => {
            return { ...prev, enteredDate: event.target.value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {

            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setUserInput((prev) => {
            return { ...prev, enteredTitle: '', enteredAmount: '', enteredDate: '' }
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new_expense_controls">
                <div className="new_expense_control">
                    <label htmlFor="title">Title</label><br />
                    <input
                        type="text"
                        name="title"
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new_expense_control">
                    <label htmlFor="amount">Amount</label><br />
                    <input
                        type="number"
                        name="amount"
                        value={userInput.enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new_expense_control">
                    <label htmlFor="date">Date</label><br />
                    <input
                        type="date" onChange={dateChangeHandler}
                        value={userInput.enteredDate}
                        min="2015-1-1"
                        max={new Date()}
                        name="date"
                    />
                </div>
                <div className="new_expense_action">
                    <Button type="submit" name={"Add Expense"} />
                    <Button name={"Cancel"} onClick={props.onCancel}></Button>
                </div>
            </div>
        </form >
    )
}

export default ExpenseForm;