import './Todos.css';
import { useState } from "react";

const TodoAdd = (props) => {
    const [getInput, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInput
        }

        props.onAddTodo(newTodo)

        // console.log(newTodo)
    }

    const handleInput = (e) => {
        setInput(e.target.value)
        // console.log(getInput)
    }

    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input onChange={handleInput} className="todoInput" type="text" placeholder="Add todo..." />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoAdd;