import Card from '../UI/Card';
import './Expense.css'
import ExpenseItem from "./ExpenseItem";

export default function Expense (props) {
    const expenses = props.expenses;
    return (
        <Card className="expense">
            {expenses.map((expense => {
                return(  
                <ExpenseItem
                expense={expense}
            ></ExpenseItem>)
            }))}
        </Card>
        
    )
}