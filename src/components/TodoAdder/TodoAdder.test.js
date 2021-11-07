import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import TodoAdder from './TodoAdder';
import renderer from 'react-test-renderer';

describe('The <TodoAdder /> component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoAdder />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('handles user input', () => {
    const mockInput = 'Walk the dog';
    render(<TodoAdder />);
    userEvent.type(screen.getByPlaceholderText('Add a todo'), mockInput);
    expect(screen.getByPlaceholderText('Add a todo')).toHaveValue(
      'Walk the dog',
    );
  });
  test('handles snapshot', () => {
    const mockInput = 'Walk the dog';
    render(<TodoAdder />);
    userEvent.type(screen.getByPlaceholderText('Add a todo'), mockInput);
    const TodoAdderComponent = renderer.create(<TodoAdder />).toJSON();
    expect(TodoAdderComponent).toMatchSnapshot();
  });
});
