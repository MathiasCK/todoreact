import React, { useState } from 'react';

const Todo = ({ todos, completeTodo, removeTodo }) => {
  const [finished, setIsFinished] = useState(false);

  return todos.map(todo => (
    <div key={todo.id} className={finished ? 'todo__finished' : 'todo'}>
      <div
        onClick={() => {
          completeTodo(todo.id);
          setIsFinished(!finished);
        }}
      >
        {todo.text}
      </div>

      {finished && <button onClick={() => removeTodo(todo.id)}>Delete</button>}
    </div>
  ));
};

export default Todo;
