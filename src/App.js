import './App.css';
import './components/Expenses/ExpenseItems.css'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const expenses = [
  {
    id: 'e1',
    title: 'Vegetables',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Smart Phone',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Bike',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  return (
    <div className="App">
      <h1>HEllo</h1>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
