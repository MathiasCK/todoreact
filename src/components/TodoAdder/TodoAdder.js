import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FormInput from './Form-Input';
import './styles/todoadder-styles.css';

const TodoAdder = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState('');

  const addNewTodo = todo => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

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

  return (
    <form className='todo-adder' onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='add'
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
        label='Add a todo'
        required
      />
      <button className='todo-adder__button' onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

TodoAdder.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoAdder;
