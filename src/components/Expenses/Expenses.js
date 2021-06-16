import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filterYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <li>
      <Card className="expenses">
        
        <ExpenseFilter
          selected={selectedYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesChart expenses={filterYear} />
        <ExpenseList items={filterYear}/>
      </Card>

    </li>
  );
};

export default Expenses;
