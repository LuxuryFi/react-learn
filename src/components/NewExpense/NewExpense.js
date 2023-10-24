import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense (props) {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
    }
    return (
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}
