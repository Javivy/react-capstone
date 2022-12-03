import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from './redux/ConfigureStore';
import App from './App';

describe('Test the Crytos', () => {
  test('Test the Cryptos Page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const cryptosPage = screen.getByText('Cryptos');
    expect(cryptosPage).toBeInTheDocument();
  });

  test('Renders a Search for a Cryptocurrency', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const cryptosPage = screen.getByText('Cryptos');
    fireEvent.click(cryptosPage);
    setTimeout(() => {
      const searchBar = screen.getByPlaceholderText('text');
      fireEvent.change(searchBar, { target: { value: 'bitcoin' } });
      fireEvent.keyPress(searchBar, { key: 'Enter' });
      expect(screen.getByText('bitcoin')).toBeInTheDocument();
    }, 3000);
  });

  test('Renders the Reset button', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Reset'));
    setTimeout(() => {
      expect(screen.getByText('Ethereum')).toBeInTheDocument();
    }, 3000);
  });

  test('Renders Bitcoin details', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    setTimeout(() => {
      fireEvent.click(screen.getByText('Bitcoin'));
      expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    }, 3000);
  });
});

describe('Test render App', () => {
  test('Test the App component', () => {
    const rendered = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(rendered).toMatchSnapshot();
  });
});
