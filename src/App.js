import React from 'react';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss'; // Добавляем стили для приложения

function App() {
  return (
      <Provider store={store}>
        <div className="app">
          <TodoList />
        </div>
      </Provider>
  );
}

export default App;
