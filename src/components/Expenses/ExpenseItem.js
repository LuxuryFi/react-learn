import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

export default function ExpenseItem (props) {
  
    const expensePrice = props.expense.price;
    const expenseName = props.expense.title;
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{expenseName}</h2>
                <div className="expense-item__price">${expensePrice}</div>
            </div>
        </Card>

    );
}