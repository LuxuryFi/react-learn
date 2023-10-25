import Card from '../UI/Card';
import './Expense.css'
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";

export default function Expense (props) {
    const filterChangeHandler = year => {
        props.onFilterChange(year);
    }

    const expenses = props.expenses;
    return (
        <div>
            
            <Card className="expense">
            <ExpenseFilter onFilterChange={filterChangeHandler}></ExpenseFilter>
            {expenses.map((expense => {
                return(  
                <ExpenseItem
                expense={expense}
            ></ExpenseItem>)
            }))}
        </Card>
        </div>
       
        
    )
}