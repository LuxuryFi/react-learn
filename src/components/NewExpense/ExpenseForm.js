import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title,
            price,
            date,
        }
    }   

    return (
        <form className="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" onChange={priceChangeHandler} min="0.01" step="0.01"></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2024-01-01"></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onSubmit={submitHandler} type="submit">Submit</button>
            </div>
        </form>
    )
}