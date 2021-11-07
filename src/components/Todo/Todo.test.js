import ReactDOM from 'react-dom';
import Todo from './Todo';

describe('The <Todo /> component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Todo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
