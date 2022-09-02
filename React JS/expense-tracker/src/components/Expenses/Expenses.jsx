import React from 'react'
import Card from '../UI/Card';

import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';

import ExpenseChart from './ExpenseChart';

function Expenses(props) {

  const [filteredDate,setFilteredDate]=useState('2020')

  const filterChangeHandler=(selectedYear)=>{
      const filterValue=selectedYear;
      setFilteredDate(filterValue);
  }

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredDate;
  });


  return (
      <div>
        <Card className='expenses'>
          <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredDate} />
          <ExpenseChart expenses={filteredExpenses}/>
                    <ExpenseList items={filteredExpenses}/>
        </Card>
      </div>
      
  )
}

export default Expenses
