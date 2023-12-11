
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.payload.text, completed: false }];

        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
            );

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id);

        case 'DELETE_ALL_TODOS':
            return [];

        default:
            return state;
    }
};

export default todoReducer;
