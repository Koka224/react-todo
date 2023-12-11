import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions/todoActions';
import '../styles/TodoItem.scss';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            <span onClick={handleToggle}>{todo.text}</span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;
