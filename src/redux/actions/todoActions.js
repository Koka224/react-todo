export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: { text },
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: { id },
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: { id },
});

export const deleteAllTodos = () => ({
    type: 'DELETE_ALL_TODOS',
});
