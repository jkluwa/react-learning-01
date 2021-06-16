import React, { useState } from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

  const [formState, setFormState] = useState(false);

  const expenseUpdateHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expense);
    changeStateHandler();
  }

  const changeStateHandler = () => {
    setFormState(state => {
      return !state;
    })
  }

  return (
    <div className="new-expense">
      {!formState && <button onClick={changeStateHandler}>Create new expense</button>}
      {formState && <ExpenseForm changeState={changeStateHandler} onExpenseUpdate={expenseUpdateHandler}/>}
    </div>
  );
}

export default NewExpense;
