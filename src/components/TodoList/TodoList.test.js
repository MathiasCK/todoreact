import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

describe('The <App /> component', () => {
  test('renders learn react link', () => {
    render(<TodoList />);
    const linkElement = screen.getByText(/Plan/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
