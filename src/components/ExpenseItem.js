import './ExpenseItem.css'

export default function ExpenseItem (props) {
    const expenseDate = props.date;
    const expensePrice = props.price;
    const expenseName = props.title;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseName}</h2>
                <div className="expense-item__price">${expensePrice}</div>
            </div>
        </div>

    );
}