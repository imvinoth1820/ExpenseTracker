import React from 'react'

function ExpenseItem (props) {
    const{ name, amount, date } = props
  return (
    <div className='header'>
    <div className='exp'>The Expense: {name}</div>
    <div className='amt'>Rs: {amount}</div>
    <div className='dte'>{date}</div>
     <br />
    </div>
  );
}

export default ExpenseItem