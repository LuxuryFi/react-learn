import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  console.log('Test App')
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

  const filterChangeHandler = () => {
    
  }

  return (
    <div>
      <NewExpense></NewExpense>
      <Expense expenses={expenses} onFilterChange={filterChangeHandler}></Expense>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
