// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension';
// const composedEnhancers = composeWithDevTools()
// const store = configureStore({
//     reducer: rootReducer,
//     composedEnhancers
// })
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import FiltersSlide from "../components/Filters/FiltersSlide";
import TodoSlide from "../components/TodoList/TodoSlide";

const store = configureStore({
    reducer: {
        filters: FiltersSlide.reducer,
        todoList: TodoSlide.reducer,
    }
})

export default store;