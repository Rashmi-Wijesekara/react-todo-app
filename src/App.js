import './App.css';
import React, {useState, useEffect} from 'react';
import db from './firebase'
import firebase from 'firebase/compat/app'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodos = (event)=>{
    setTodos([...todos, input])
    
    console.log(todos)
    setInput("")
    event.preventDefault()
  }

  const handleInputChange = (event)=>{
    setInput(event.target.value)
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>

      <form>
        <input value={input} onChange= {handleInputChange}/>
        <button
          onClick= {addTodos}
          type="submit"
          disabled={!input}
        >SAVE</button>
      </form>

      <ul>
        {todos.map(
          todo => (
            <li>{todo}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
