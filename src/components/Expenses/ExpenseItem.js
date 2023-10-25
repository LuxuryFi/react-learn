import Card from '../UI/Card';
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

export default function ExpenseItem (props) {
  
    const expensePrice = props.expense.price;
    // const expenseName = props.expense.title;
    const [title, setTitle] = useState(props.expense.title);

    const clickHandler = () => {
        setTitle('Test')
    };


    return (
        <li>
            <Card className="expense-item">
            <ExpenseDate date={props.expense.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${expensePrice}</div>
            </div>
            <button onClick={clickHandler}>Change</button>
        </Card>

        </li>
        

    );
}