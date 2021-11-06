import React, { useState } from 'react';

const Todo = ({ todos, completeTodo, removeTodo }) => {
  return todos.map(todo => (
    <div key={todo.id} className={todo.isComplete ? 'todo__finished' : 'todo'}>
      <div
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        {todo.text}
      </div>

      {todo.isComplete && (
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
      )}
    </div>
  ));
};

export default Todo;
