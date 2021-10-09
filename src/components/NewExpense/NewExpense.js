import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card'
import './css/NewExpense.css'
import Button from '../UI/Button'

const NewExpense = (props) => {

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 1000).toString()
        };

        props.onAddExpense(expenseData)
        setIsEditing(false)
    }
    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () => {
        setIsEditing(true)

    }
    const stopEditingHandler = () => {

        setIsEditing(false)
    }

    return (
        <Card className="new-expense">
            {!isEditing && (<Button name={"Add new expense"} onClick={startEditingHandler} />)}
            {isEditing &&
                (<ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />)}
        </Card>
    )
}

export default NewExpense;