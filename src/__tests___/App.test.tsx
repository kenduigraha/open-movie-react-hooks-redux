import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../__mocks__/axios';
import App from '../App';

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

const store: Store = mockStore({ movies: {} });

it('renders App component to match snapshot', () => {
  const component = shallow(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(component).toMatchSnapshot();
});

it('renders App component with redux store without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  );
});

it('axios should not to be called', async () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(axios.get).not.toHaveBeenCalled();
});
