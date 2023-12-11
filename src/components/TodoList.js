import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import FilterButtons from './FilterButtons';
import { addTodo, deleteAllTodos } from '../redux/actions/todoActions';
import '../styles/TodoList.scss';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);

    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    };

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    const handleDeleteAll = () => {
        dispatch(deleteAllTodos());
    };

    const filteredTodos = () => {
        switch (filter) {
            case 'COMPLETED':
                return todos.filter(todo => todo.completed);
            case 'ACTIVE':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="add-todo">
                <input
                    type="text"
                    placeholder="Add a new todo..."
                    value={newTodo}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {filteredTodos().map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <FilterButtons />
            <button onClick={handleDeleteAll} className="delete-all">
                Delete All
            </button>
        </div>
    );
};

export default TodoList;
