import './App.css';
import React, {useState, useEffect} from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import TodoItem from "./TodoItem"

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  console.log(todos)
  const addTodos = (event)=>{
    setTodos([...todos, input])
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
        <FormControl>
          <InputLabel>✅Write a Todo</InputLabel>
          <Input value={input} onChange= {handleInputChange}/>
        </FormControl>
        
        <Button
          onClick= {addTodos}
          type="submit"
          disabled={!input}
          color= "primary"
          variant="contained"
        >
          Add
        </Button>
      </form>

      <ul>
        {todos.map(
          todo => (
            <TodoItem text={todo}/>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
