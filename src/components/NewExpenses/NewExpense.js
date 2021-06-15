import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const expenseUpdateHandler = (expenseData) => {

    const expense = {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expense);

  }

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseUpdate={expenseUpdateHandler}/>
    </div>
  );
}

export default NewExpense;
