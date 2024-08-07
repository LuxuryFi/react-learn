import { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css'
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

export default function Expense (props) {
    const [year, setDefaultYear] = useState('2023');        
    
    const filterChangeHandler = selectedYear => {
        props.onFilterChange(selectedYear);
        setDefaultYear(selectedYear);
    }

    const expenses = props.expenses;
    return (
        <div>
            <Card className="expense">
            <ExpenseFilter selected={year} onFilterChange={filterChangeHandler}/>
            <ExpenseList expenses={expenses}/>
        </Card>
        </div>
    )
}