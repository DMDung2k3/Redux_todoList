
// const initState =
//     [
//         {
//             id: 1,
//             name: 'Learn Yoga',
//             completed: false,
//             priority: 'Medium'
//         },
//         {
//             id: 2,
//             name: 'Learn redux',
//             completed: false,
//             priority: 'high'
//         },
//         {
//             id: 3,
//             name: 'Learn CSS',
//             completed: true,
//             priority: 'Medium'
//         },
//         {
//             id: 4,
//             name: 'Learn HTML',
//             completed: false,
//             priority: 'low'
//         },
//     ]

// const todoListReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return (
//                 [
//                     ...state,
//                     action.payload,
//                 ]
//             )
//         case 'todoList/toggleTodoStatus':
//             return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
//         default:
//             return state;
//     }
// }

// export default todoListReducer;
import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
    name: 'todoList',
    initialState: [
        {
            id: 1,
            name: 'Learn Yoga',
            completed: false,
            priority: 'Medium'
        },
        {
            id: 2,
            name: 'Learn redux',
            completed: false,
            priority: 'high'
        },
        {
            id: 3,
            name: 'Learn CSS',
            completed: true,
            priority: 'Medium'
        },
        {
            id: 4,
            name: 'Learn HTML',
            completed: false,
            priority: 'low'
        },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
            //ACTION CREATOR
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        }
    }
})