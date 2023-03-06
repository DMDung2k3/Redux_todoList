
const initState =
    [
        {
            id: 1,
            name: 'Learn Yoga',
            completed: true,
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
    ]


const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return (
                [
                    ...state,
                    action.payload,
                ]
            )
        default:
            return state;
    }
}


export default todoListReducer;
