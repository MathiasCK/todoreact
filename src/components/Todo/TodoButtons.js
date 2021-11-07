import React from 'react';

const TodoButtons = ({ todo, markTodoAsComplete, removeTodo }) => (
  <>
    {todo.isComplete ? (
      <div>
        <button
          className='todo__content__button--mark'
          onClick={() => {
            markTodoAsComplete(todo.id);
          }}
        >
          Undo
        </button>
        <button
          className='todo__content__button--delete'
          onClick={() => removeTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    ) : (
      <button
        className='todo__content__button--mark'
        onClick={() => {
          markTodoAsComplete(todo.id);
        }}
      >
        Complete
      </button>
    )}
  </>
);

export default TodoButtons;
