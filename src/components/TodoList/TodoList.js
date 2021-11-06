import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <Todo todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoList;
