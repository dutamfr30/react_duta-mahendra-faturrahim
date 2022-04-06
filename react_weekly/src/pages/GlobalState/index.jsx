import React from 'react';
import { useState } from 'react';
import Title from './components/Title';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import './components/Todos.css';

export default function Home () {
    // const eventCompleteTodo = (id) => {
    //     let updateData = getData.map((todo) => {
    //         if(todo.id === id) {
    //             todo.completed = !todo.completed
    //         }
    //         return todo
    //     })
    //     setData(updateData)
    // };

    return (
        <div>
            <Title />
            <TodoAdd />
            <TodoList />
            {/* {getData.map((todo, index) => {
                return (
                    
                )
            })} */}
            {/* {console.log(getData)} */}
        </div>
        )
    
    
}
