import React from 'react';
import { useState } from 'react';
import Title from './components/Title';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/testing';
import './components/Todos.css';

export default function Home(props) {
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
    
    const eventAddTodo = (todo) => {
        setData(getData.concat(todo))
        console.log(getData)
    }
    
    // const eventUpdateTodo = (todoId, newValue) => {
    //     if (!newValue.text || )
    // }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    }

    return (
        <div>
            <Title />
            <TodoAdd onAddTodo={eventAddTodo} />
            <TodoList 
            dataTodos={getData}
            updateTodos={updateTodo}
            />
        </div>
        )
    
    
}
