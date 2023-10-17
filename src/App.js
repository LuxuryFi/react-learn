import ExpenseItem from "./components/ExpenseItem";

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
  return (
    <div>
      <ExpenseItem 
      title={expenses[0].title}
      price={expenses[0].price}
      date={expenses[0].date}
      ></ExpenseItem>
        <ExpenseItem 
      title={expenses[1].title}
      price={expenses[1].price}
      date={expenses[1].date}
      ></ExpenseItem>
        <ExpenseItem 
      title={expenses[2].title}
      price={expenses[2].price}
      date={expenses[2].date}
      ></ExpenseItem>
        <ExpenseItem 
      title={expenses[3].title}
      price={expenses[3].price}
      date={expenses[3].date}
      ></ExpenseItem>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
