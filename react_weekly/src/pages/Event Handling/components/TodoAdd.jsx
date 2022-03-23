import './Todos.css';
import { useState } from "react";

const TodoAdd = (props) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 100) +1, 
            title: input, 
            completed: false
        }
        props.onAddTodo(newTodo)

        setInput('')

        // console.log(newTodo)
    }

    const handleInput = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input
            value={input} 
            onChange={handleInput} 
            className="todoInput" 
            type="text" 
            placeholder="Add todo..." 
            />
            <button type="submit" className="todoButton">Submit</button>
        </form>
    )
}

export default TodoAdd;