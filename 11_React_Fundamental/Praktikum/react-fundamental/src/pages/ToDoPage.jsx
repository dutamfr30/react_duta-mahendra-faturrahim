import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

export default function ToDoPage({listApp}) {
    return (
        <>
            <Header text="To Do App"/>
            {listApp.map((list)=> <Body list={list}/>)}
        </>
    )
}
