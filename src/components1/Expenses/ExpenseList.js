import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
    let expenseList = <p>Not found any record</p> ;

    if (expenses.length === 0) {
        return <h2 className="expense-list__fallback">Found nothing here!</h2>
    }

     

    return (
        <ul className="expense-list">
           {expenses.map((expense => {
                return(  
                <ExpenseItem
                expense={expense} key={expense.id}
            ></ExpenseItem>)
            }))}
        </ul>
    )
}   

export default ExpenseList;