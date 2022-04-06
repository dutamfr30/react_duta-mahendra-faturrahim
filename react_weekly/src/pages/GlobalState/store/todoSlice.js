import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
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
];

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoos: initialValue
    },
    reducers: {
        addTodo: (state, action) => {
            let id = 1;
            if(state.todoos.length > 0) {
                id = state.todoos.length + 1
            }
            let todo = {id: id, title: action, completed: false}
            let newTodo = [todo, ...action.payload]
            state.todoos = [...state.todoos, newTodo]
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload;
            })
        },
        // completedTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => {
        //         if(todo.id === action.payload) {
        //             todo.completed = !todo.completed
        //         }
        //         return todo
        //     })
        // }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer