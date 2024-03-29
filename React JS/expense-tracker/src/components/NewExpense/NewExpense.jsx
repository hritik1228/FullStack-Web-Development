import React from 'react'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


function NewExpense(props) {

  const [isEditing,setIsEditing]=useState(false)

  const onSaveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  const startEditingHandler=()=>{
    setIsEditing(true);
  }

  const stopEditingHandler=()=>{
    setIsEditing(false)
  }
  

  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}

export default NewExpense
