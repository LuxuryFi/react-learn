import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      title: 'Test A',
      price: 1004,
      date: new Date(2023, 5, 25)
    },
    {
      title: 'Test B',
      price: 1003,
      date: new Date(2023, 5, 24)
    },
    {
      title: 'Test C',
      price: 1002,
      date: new Date(2023, 5, 22)
    },
    {
      title: 'Test D',
      price: 1001,
      date: new Date(2023, 5, 23)
    }
  ]
  const [expenseList, setExpenseList] = useState(expenses);

  const filterChangeHandler = (year) => {
    const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear().toString() === year);
    setExpenseList([...filteredExpenses]);
    console.log(filteredExpenses)

  }

  const onSaveExpenseDataHandler = (expenseData) => {
    setExpenseList([...expenseList,expenseData]);
  }

  return (
    <div>      
      <NewExpense onSaveExpenseData={onSaveExpenseDataHandler}></NewExpense>
      <Expense expenses={expenseList} onFilterChange={filterChangeHandler}></Expense>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
