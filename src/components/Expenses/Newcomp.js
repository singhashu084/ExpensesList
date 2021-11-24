import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import './expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';


const Newcomp = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');


    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Newcomp;