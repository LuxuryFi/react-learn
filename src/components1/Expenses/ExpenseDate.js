import './ExpenseDate.css'

export default function ExpenseDate (props) {
    const month = props.date.toLocaleString('en-US', { month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.getDay();

    return (
        <div className="expense-item__date">
            <div className="expense-item__month">{month}</div>
            <div className="expense-item__year">{year}</div>
            <div className="expense-item__day">{day}</div>
        </div>
    )
}