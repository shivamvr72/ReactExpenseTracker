import {useState} from 'react';
import "./NewExpenseForm.css"

export default function NewEnterExpenseForm(){
    const [entertitle, setEnterTitle] = useState("");
    const [enteramount, setEnterAmount] = useState("");
    const [enterdate, setEnterDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault(); 
        const expenseData = {
            title: entertitle,
            amount: enteramount,
            date: new Date(enterdate)
        }
        console.log(expenseData);
        setEnterTitle("");
        setEnterAmount("");
        setEnterDate("");
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title: </label>
                    <input type="text" value={entertitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount: </label>
                    <input type="number" value={enteramount} min="0.1" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date: </label>
                    <input type="date" value={enterdate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}