import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
    const [addExpense, setAddExpense] = useState(false)
    const saveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseDate ={
            ...enteredExpenseDate,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseDate)
        setAddExpense(false)
    }

    const addExpenseHandler = () => {
        setAddExpense(true)
    }

    const stopAddHandler = () => {
        setAddExpense(false)
    }

    return (
        <div className='new-expense'>
            {!addExpense && <button onClick={addExpenseHandler}>Add new expenses</button>}
            { addExpense && <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} onCancel={stopAddHandler}/>}
        </div>
    );
};

export default NewExpense;