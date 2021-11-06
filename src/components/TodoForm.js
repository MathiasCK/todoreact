import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const TodoForm = ({ markTodoAsFinished }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    markTodoAsFinished({
      id: uuidv4(),
      text: inputValue,
    });
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        <input
          placeholder='Add a todo'
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
          name='text'
        />
        <button onClick={handleSubmit}>Add todo</button>
      </>
    </form>
  );
};

export default TodoForm;
