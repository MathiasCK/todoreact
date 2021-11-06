import React from 'react';
import './styles/todo-styles.css';

const Todo = ({ todos, setTodos }) => {
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const markTodoAsComplete = id => {
    const updatedTodos = todos
      .map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
      .sort((x, y) => {
        return x.isComplete - y.isComplete;
      });
    setTodos(updatedTodos);
  };
  return todos.map(todo => (
    <article
      key={todo.id}
      className={todo.isComplete ? 'todo__finished' : 'todo'}
    >
      <div
        onClick={() => {
          markTodoAsComplete(todo.id);
        }}
      >
        {todo.text}
      </div>

      {todo.isComplete && (
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
      )}
    </article>
  ));
};

export default Todo;
