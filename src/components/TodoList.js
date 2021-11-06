import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const markTodoAsFinished = todo => {
    // if (!todo.text || /^\s*$/.test(todo.text)) {
    //   return;
    // }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    console.log(id);
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm markTodoAsFinished={markTodoAsFinished} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </>
  );
};

export default TodoList;
