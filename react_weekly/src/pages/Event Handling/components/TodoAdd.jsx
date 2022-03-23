import './Todos.css';
import { useState } from "react";

const TodoAdd = (props) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(input);
        setInput("");
    }

    const handleInput = (e) => {
        
        setInput(e.target.value);
    }

    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input
            value={input} 
            onChange={handleInput} 
            className="todoInput" 
            type="text" 
            placeholder="Add todo..."
            required
            />
            <button type="submit" className="todoButton">Submit</button>
        </form>
    )
}

export default TodoAdd;