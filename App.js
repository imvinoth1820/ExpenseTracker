import { useState } from "react"
import './App.css';
import './style.css'
import ExpenseItem from "./ExpenseItem";


function App() {
  const [expenses, setExpenses] = useState([]);
  const[name , setName] = useState("");
  const[amount, setAmount] = useState("");
  const[date, setDate] = useState("");

  const addExpense = (expense)=>{
   
   
  };

  const handleSubmit = (event) =>{

    event.preventDefault();
    
    
    
    const data =[ ...expenses,{  name, amount , date }] 
    
    setExpenses(data)
    setName("")
    setDate("")
    setDate("")

  
  };



  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>

          <input type="text" name="name" placeholder="Expense Name" value ={name} onChange={(event)=>setName(event.target.value)} />
          <input type="text" name= "number" placeholder="Amount" value = {amount} onChange={(event)=> setAmount(event.target.value)}/>
          <input type="date" name="date" placeholder="Date" value = {date} onChange={(event)=> setDate(event.target.value)} />
          <button type="submit"> Add your Expense</button>
          </form>
          {expenses.map((expense , index)=> (
            <ExpenseItem
            key={index}
            name={expense.name}
            amount={expense.amount} 
            date={expense.date}
            />
          ))}
        </div>
      
    </div>
  );
}

export default App;
