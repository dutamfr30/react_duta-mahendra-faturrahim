// import './Todos.css';
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";
import { RiCloseCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";

const TodoList = (props) => {
   const passengers = useSelector((state) => state.passenger.passengers)
   const dispatch = useDispatch()

    return (
        // <div className={todo.completed ? "todoList complete" : "todoList"}>
        <div>
            {passengers.map((todo) => (
                <div>
                    {passengers},
                    <RiCloseCircleLine style={{marginRight : 5}} onClick={() => {dispatch(removeTodo(todo.id));
                }}/>
                </div>
                
                
            ))}
            {/* <div className="iconsContainer"> */}
                    {/* <RiCloseCircleLine style={{marginRight : 5}} removeTodo={() => {dispatch(removeTodo(item.id))
                    }}/> */}
                    {/* <RiCloseCircleLine style={{marginRight : 5}} onClick={() => removeTodo(todo.id)}/> */}
                
                {/* <RiCheckboxCircleLine onClick={() => completeTodo(todo.id)}/> */}
            {/* </div> */}
        </div>
    );
}

export default TodoList;