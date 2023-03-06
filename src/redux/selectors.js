import { createSelector } from 'reselect'

export const searchTextSelector = state => state.filters.search;
export const todoListSelector = state => state.todoList;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    (todoList, searchText) => {
        return todoList.filter((todo) => {
            return todo.name.includes(searchText);
        })
    })