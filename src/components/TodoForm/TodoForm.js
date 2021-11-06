import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    addNewTodo({
      id: uuidv4(),
      text: inputValue,
      isComplete: false,
    });
    setInputValue('');
  };

  const addNewTodo = todo => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        placeholder='Add a todo'
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Add todo</button>
    </form>
  );
};

export default TodoForm;
