// import './Todos.css';
import { RiCloseCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";

const TodoList = (props) => {
    console.log(props)
    const { todo, removeTodo, completeTodo } = props 

    return (
        <div className={todo.completed ? "todoList complete" : "todoList"}>
            {todo.title}
            <div className="iconsContainer">
                <RiCloseCircleLine style={{marginRight : 5}} onClick={() => removeTodo(todo.id)}/>
                <RiCheckboxCircleLine onClick={() => completeTodo(todo.id)}/>
            </div>
        </div>
    );
}

export default TodoList;