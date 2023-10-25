import React from 'react';
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const changeHandler = (event) => {
        const year = event.target.value;
        props.onFilterChange(year);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={changeHandler}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <div className="expenses-filter__control">
                <div className="expense-filter__chart">
                    <div className="expense-filter__bar">
                        <div className="expense-filter__bar__label">Jan</div>
                        <div className="expense-filter__bar__value" ></div>
                    </div>
                    <div className="expense-filter__bar">
                        <div className="expense-filter__bar__label">Feb</div>
                        <div className="expense-filter__bar__value"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseFilter;