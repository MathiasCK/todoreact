import React, { useState } from 'react';
import TodoAdder from '../TodoAdder/TodoAdder';
import Todo from '../Todo/Todo';
import './styles/todolist-styles.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <header className='todolist'>
      <h1 className='todolist__header'>What's happening today?</h1>
      <TodoAdder todos={todos} setTodos={setTodos} />
      <Todo todos={todos} setTodos={setTodos} />
    </header>
  );
};

export default TodoList;
