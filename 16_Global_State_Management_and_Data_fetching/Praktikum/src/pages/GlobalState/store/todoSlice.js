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
    name: "passenger",
    initialState: {
        passengers: initialValue
    },
    reducers: {
        addTodo: (state, action) => {
            let id = 1;
            if(state.passengers.length > 0) {
                id = state.passengers.length + 1
            }
            let todo = {id: id, title: action.payload, completed: false}
            state.passengers = [...state.passengers, todo]
        },
        removeTodo: (state, action) => {
            state.passengers = state.passengers.filter((todo) => {
                return todo.id !== action.payload;
            })
        },
        completedTodo: (state, action) => {
            state.passengers = state.passengers.map((todo) => {
                if(todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        }
    }
})

export const { addTodo, removeTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer