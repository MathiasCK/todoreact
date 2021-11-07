import React from 'react';
import './styles/todo-styles.css';
import PropTypes from 'prop-types';
import TodoButtons from './TodoButtons';

const Todo = ({ todos, setTodos }) => {
  const removeTodo = id => {
    const updatedTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const markTodoAsComplete = id => {
    const updatedTodos = todos
      .map(todo => {
        if (todo.id === id) {
          /* eslint-disable */
          todo.isComplete = !todo.isComplete;
          /* eslint-enable */
        }
        return todo;
      })
      .sort((x, y) => {
        if (!x.isComplete && y.isComplete) {
          const dateX = new Date(x.date);
          const dateY = new Date(y.date);
          return dateX - dateY;
        }
        return x.isComplete - y.isComplete;
      });
    setTodos(updatedTodos);
  };

  if (!todos.length) {
    return (
      <h4 className='todo__empty'>No todos yet, start adding some above</h4>
    );
  }

  return todos.map(todo => (
    <article
      key={todo.id}
      className={todo.isComplete ? 'todo__finished' : 'todo'}
    >
      <section className='todo__content'>
        <p className='todo__content--paragraph'>{todo.text}</p>
        <TodoButtons
          todo={todo}
          markTodoAsComplete={markTodoAsComplete}
          removeTodo={removeTodo}
        />
      </section>
    </article>
  ));
};

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default Todo;
