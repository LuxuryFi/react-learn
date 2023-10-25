import { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css'
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";

export default function Expense (props) {
    const [year, setDefaultYear] = useState('2023');        
    let hiddenYear = '2020, 2021 & 2022';

    const filterChangeHandler = selectedYear => {
        console.log(selectedYear)
        props.onFilterChange(selectedYear);
        setDefaultYear(selectedYear);
        switch (year) {
            case '2021': hiddenYear = '2020, 2022 & 2023';
            break;
            case '2022': hiddenYear = '2020, 2021 & 2023';
            break;
            case '2020': hiddenYear = '2021, 2022 & 2023';
            break;
            default:
                break;
        }
    }

    const expenses = props.expenses;
    return (
        <div>
            <Card className="expense">
            <p>Data for years {hiddenYear} is hidden</p>
            <ExpenseFilter selected={year} onFilterChange={filterChangeHandler}></ExpenseFilter>
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