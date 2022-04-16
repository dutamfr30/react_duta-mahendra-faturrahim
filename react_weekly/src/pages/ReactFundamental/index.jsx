import React from 'react';
import Header from './components/Header';
import Body from './components/Body';


export default function ReactFundamental () {
    const mockList = [
        {
          id: 1,
          title: "Membuat Komponen",
          completed: true,
        },
        {
          id: 2,
          title: "Unit Testing",
          completed: false,
        },
        {
          id: 3,
          title: "Setup Development Environment",
          completed: true,
        },
        {
          id: 4,
          title: "Deploy ke server",
          completed: false,
        },
      ];
    return (
        <>
            <Header text="To Do App"/>
            {mockList.map((list) => <Body list={list}/>)}
        </>
    );
}
