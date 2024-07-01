import Card from "../UI/Card"
import ItemExpense from "./ExpenseItems"

export default function Expenses(props){
    const data = []
    props.expenses.forEach((expense, i)=>{
        data.push(
        <ItemExpense 
            key= {expense.title}
            date = {expense.date}
            title = {expense.title}
            amount = {expense.amount}
        />
        )
    })

    return(
        <Card className="expenses">
            {data}
        </Card>
    )
}