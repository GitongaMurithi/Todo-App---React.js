import React, {useState} from "react";
import './App.css'

const ToDoList = () =>{

    const [todos , setTodos] = useState([])
    const [newTodo , setNewTodo] = useState("")

    const addTodo = () => {
        if(newTodo.trim() !== "") {
            setTodos(prevTodos => [...prevTodos , newTodo])
            setNewTodo("")
        }
        
    }

    const onInputChange = (event) => {
        setNewTodo(event.target.value)
    }

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index)
        setTodos(updatedTodos)
    }

    function moveDown(index) {
        if(index < todos.length -1) {
            const updatedTodos = [...todos];
            [updatedTodos[index] , updatedTodos[index +1]] = [updatedTodos[index +1] , updatedTodos[index]];
            setTodos(updatedTodos)
        }
    }

    function moveUp(index) {
        if(index > 0) {
            const updatedTodos = [...todos];
            [updatedTodos[index] , updatedTodos[index -1]] = [updatedTodos[index -1] , updatedTodos[index]];
            setTodos(updatedTodos)
        }
    }

    return(

    <div className="container">
        
    <h1>Todo List</h1>

    <div className="input-section">
        <input 
            type="text" 
            placeholder = "Enter todo here" 
            value={newTodo}
            onChange={onInputChange}
        />

        <button className="add-button"
        onClick={addTodo}>Add todo
        </button>

        </div>

        <ul>
            {todos.map((todo , index) => 
            <li key={index}>
                <span className="text">{todo}</span>

                <button className="delete-button"
                onClick={() => deleteTodo(index)}>
                    Delete</button>

                <button className="move-button"
                onClick={() => moveUp(index)}> 
                    Up</button>

                <button className="move-button" 
                onClick={() => moveDown(index)}>
                    Down</button>
            </li> 
            )}
        </ul>
    
    </div>
    )
}
export default ToDoList