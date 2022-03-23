// import './Todos.css';

const TodoList = (props) => {
    console.log(props)

    return (
        <div>
            {
           props.dataTodos.map((todo) => {
               return <div key={todo.id}>{todo.title}</div>
           })
            }
        </div>
    );
}

export default TodoList;