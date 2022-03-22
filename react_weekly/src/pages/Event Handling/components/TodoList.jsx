// import './Todos.css';

const TodoList = (props) => {
    console.log(props.dataTodos)

    return (
        <div>
            <form>
                <ul className="listItem">{
                    props.dataTodos.map((data) => {
                        return <li key={data.id}>{data.title}</li>
                    })            
                }</ul>
            </form>
        </div>
    )
}

export default TodoList;