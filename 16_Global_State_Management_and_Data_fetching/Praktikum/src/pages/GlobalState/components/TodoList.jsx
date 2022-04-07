// import './Todos.css';
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completedTodo } from "../store/todoSlice";
import { RiCloseCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";

const TodoList = () => {
   const passengers = useSelector((state) => state.todoo.passengers);
   console.log("passengers", passengers)
   const dispatch = useDispatch()

    return (
        <>
            {passengers.map((todo) => (
                <div className={todo.completed ? "todoList complete" : "todoList"}>
                    {todo.title}
                    <div className="iconsContainer">
                    <RiCloseCircleLine 
                    style={{marginRight : 5}} 
                    onClick={() => {
                        dispatch(removeTodo(todo.id));
                    }}/>
                    <RiCheckboxCircleLine 
                    onClick={() => {
                        dispatch(completedTodo(todo.id));
                    }}/>
                    </div>
                </div>
                ))}
        </>
    );
}

export default TodoList;