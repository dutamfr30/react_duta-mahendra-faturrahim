import React from 'react';
import { useState } from 'react';
import Title from './components/Title';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import './components/Todos.css';

export default function EventHandling (props) {
    const [getData, setData] = useState([
        {
            id:  1,
            title: "Mengerjakan Exercise",
            completed: true
        },
        {
            id: 2,
            title: "Mengerjakan Assignment",
            completed: false
        }
    ])

    const eventAddTodo = (title) => {
        let id = 1;
        if(getData.length > 0) {
            id = getData.length + 1
        }
        let todo = {id: id, title: title, completed: false}
        let newTodo = [todo, ...getData]
        setData(newTodo)
    };

    const eventRemoveTodo = (id) => {
        let updateData = [...getData].filter((todo) => todo.id !== id);
        setData(updateData);
    };

    const eventCompleteTodo = (id) => {
        let updateData = getData.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setData(updateData)
    };

    return (
        <div>
            <Title />
            <TodoAdd onAddTodo={eventAddTodo} />
            {getData.map((todo, index) => {
                return (
                    <TodoList 
                    removeTodo={eventRemoveTodo}
                    completeTodo={eventCompleteTodo}
                    todo={todo}
                    key={todo.id}
                    />
                )
            })}
            {console.log(getData)}
        </div>
        )
    
    
}
